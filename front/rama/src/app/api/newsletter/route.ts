// src/app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { newsletterService } from '@/lib/firestore';
import { ApiResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Email invalide'
      }, { status: 400 });
    }

    // Subscribe
    const id = await newsletterService.subscribe(email);

    return NextResponse.json<ApiResponse<{ id: string }>>({
      success: true,
      data: { id },
      message: 'Inscription réussie ! Merci de votre soutien.'
    }, { status: 201 });

  } catch (error: any) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: error.message || 'Erreur lors de l\'inscription'
    }, { status: 500 });
  }
}