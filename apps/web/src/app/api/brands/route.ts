import { NextRequest, NextResponse } from 'next/server';
import { brandService } from '@perfume-catalog/database';
import type { ApiResponse, Brand, PaginatedResult } from '@perfume-catalog/shared';

// GET /api/brands - Get all brands
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const paginated = searchParams.get('paginated') === 'true';
    
    if (paginated) {
      const page = parseInt(searchParams.get('page') || '1');
      const pageSize = parseInt(searchParams.get('pageSize') || '10');
      const result = brandService.getPaginated({ page, pageSize });
      
      return NextResponse.json<ApiResponse<PaginatedResult<Brand>>>({
        success: true,
        data: result,
      });
    }

    const brands = brandService.getAll();
    return NextResponse.json<ApiResponse<Brand[]>>({
      success: true,
      data: brands,
    });
  } catch (error) {
    console.error('Error fetching brands:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل تحميل الماركات' },
      { status: 500 }
    );
  }
}

// POST /api/brands - Create a new brand
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.slug) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'الاسم والرابط مطلوبان' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existing = brandService.getBySlug(body.slug);
    if (existing) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'الرابط موجود مسبقاً' },
        { status: 400 }
      );
    }

    const brand = brandService.create({
      name: body.name,
      slug: body.slug,
      description: body.description || '',
      image: body.image || '',
    });

    return NextResponse.json<ApiResponse<Brand>>({
      success: true,
      data: brand,
      message: 'تم إضافة الماركة بنجاح',
    });
  } catch (error) {
    console.error('Error creating brand:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل إضافة الماركة' },
      { status: 500 }
    );
  }
}
