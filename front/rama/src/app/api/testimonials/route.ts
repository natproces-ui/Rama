import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { ApiResponse, Testimonial } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const publishedParam = searchParams.get('published');
    
    let testimonialsQuery;
    
    if (publishedParam === 'true') {
      // Maintenant avec l'index, on peut utiliser where + orderBy
      testimonialsQuery = query(
        collection(db, 'testimonials'), 
        where('isPublished', '==', true),
        orderBy('createdAt', 'desc')
      );
    } else {
      testimonialsQuery = query(
        collection(db, 'testimonials'),
        orderBy('createdAt', 'desc')
      );
    }
    
    const snapshot = await getDocs(testimonialsQuery);
    const testimonials = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Testimonial[];
    
    return NextResponse.json<ApiResponse<Testimonial[]>>({
      success: true,
      data: testimonials
    });
  } catch (error: any) {
    console.error('Testimonials fetch error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Erreur lors de la récupération des témoignages'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const docRef = await addDoc(collection(db, 'testimonials'), {
      name: data.name,
      region: data.region,
      text: data.text,
      avatarUrl: data.avatarUrl || '',
      isPublished: data.isPublished || false,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    });
    
    return NextResponse.json<ApiResponse<{ id: string }>>({
      success: true,
      data: { id: docRef.id },
      message: 'Témoignage créé avec succès'
    }, { status: 201 });
  } catch (error: any) {
    console.error('Testimonial creation error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Erreur lors de la création du témoignage'
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
    
    await updateDoc(doc(db, 'testimonials', id), {
      ...updateData,
      updatedAt: Timestamp.now()
    });
    
    return NextResponse.json<ApiResponse<null>>({
      success: true,
      message: 'Témoignage mis à jour avec succès'
    });
  } catch (error: any) {
    console.error('Testimonial update error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Erreur lors de la mise à jour du témoignage'
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
    
    await deleteDoc(doc(db, 'testimonials', id));
    
    return NextResponse.json<ApiResponse<null>>({
      success: true,
      message: 'Témoignage supprimé avec succès'
    });
  } catch (error: any) {
    console.error('Testimonial deletion error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Erreur lors de la suppression du témoignage'
    }, { status: 500 });
  }
}