import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ApiResponse, NewsArticle } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const publishedParam = searchParams.get('published');
    
    let newsQuery;
    
    if (publishedParam === 'true') {
      newsQuery = query(
        collection(db, 'news'), 
        where('isPublished', '==', true), 
        orderBy('publishedAt', 'desc')
      );
    } else {
      newsQuery = query(
        collection(db, 'news'),
        orderBy('publishedAt', 'desc')
      );
    }
    
    const snapshot = await getDocs(newsQuery);
    const news = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as NewsArticle[];
    
    return NextResponse.json<ApiResponse<NewsArticle[]>>({
      success: true,
      data: news
    });
  } catch (error: any) {
    console.error('News fetch error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Erreur lors de la récupération des actualités'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const docRef = await addDoc(collection(db, 'news'), {
      title: data.title,
      excerpt: data.excerpt,
      imageUrl: data.imageUrl || '',
      publishedAt: data.publishedAt || new Date().toISOString(),
      isPublished: data.isPublished || false,
      createdAt: Timestamp.now()
    });
    
    return NextResponse.json<ApiResponse<{ id: string }>>({
      success: true,
      data: { id: docRef.id },
      message: 'Actualité créée avec succès'
    }, { status: 201 });
  } catch (error: any) {
    console.error('News creation error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Erreur lors de la création de l\'actualité'
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'ID requis'
      }, { status: 400 });
    }
    
    await updateDoc(doc(db, 'news', id), updateData);
    
    return NextResponse.json<ApiResponse<null>>({
      success: true,
      message: 'Actualité mise à jour avec succès'
    });
  } catch (error: any) {
    console.error('News update error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Erreur lors de la mise à jour de l\'actualité'
    }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'ID requis'
      }, { status: 400 });
    }
    
    await deleteDoc(doc(db, 'news', id));
    
    return NextResponse.json<ApiResponse<null>>({
      success: true,
      message: 'Actualité supprimée avec succès'
    });
  } catch (error: any) {
    console.error('News deletion error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Erreur lors de la suppression de l\'actualité'
    }, { status: 500 });
  }
}