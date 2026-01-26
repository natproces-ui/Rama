// src/app/api/stats/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { impactStatsService } from '@/lib/firestore';
import { ApiResponse, ImpactStats } from '@/types';

export async function GET() {
  try {
    const stats = await impactStatsService.get();

    if (!stats) {
      // Return default stats if none exist
      return NextResponse.json<ApiResponse<ImpactStats>>({
        success: true,
        data: {
          womenHelped: 500,
          communitiesSensitized: 50,
          medicalPartners: 20,
          yearsOfExperience: 10
        }
      });
    }

    return NextResponse.json<ApiResponse<ImpactStats>>({
      success: true,
      data: stats
    });

  } catch (error: any) {
    console.error('Stats fetch error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Erreur lors de la récupération des statistiques'
    }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validation
    if (!body.womenHelped || !body.communitiesSensitized || 
        !body.medicalPartners || !body.yearsOfExperience) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Tous les champs sont requis'
      }, { status: 400 });
    }

    // Update stats
    await impactStatsService.update(body);

    return NextResponse.json<ApiResponse<ImpactStats>>({
      success: true,
      data: body,
      message: 'Statistiques mises à jour avec succès'
    });

  } catch (error: any) {
    console.error('Stats update error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Erreur lors de la mise à jour des statistiques'
    }, { status: 500 });
  }
}