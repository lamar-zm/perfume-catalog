import { NextRequest, NextResponse } from 'next/server';
import { categoryService } from '@perfume-catalog/database';
import type { ApiResponse, Category, PaginatedResult } from '@perfume-catalog/shared';

// GET /api/categories - Get all categories
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const paginated = searchParams.get('paginated') === 'true';
    
    if (paginated) {
      const page = parseInt(searchParams.get('page') || '1');
      const pageSize = parseInt(searchParams.get('pageSize') || '10');
      const result = categoryService.getPaginated({ page, pageSize });
      
      return NextResponse.json<ApiResponse<PaginatedResult<Category>>>({
        success: true,
        data: result,
      });
    }

    const categories = categoryService.getAll();
    return NextResponse.json<ApiResponse<Category[]>>({
      success: true,
      data: categories,
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل تحميل التصنيفات' },
      { status: 500 }
    );
  }
}

// POST /api/categories - Create a new category
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
    const existing = categoryService.getBySlug(body.slug);
    if (existing) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'الرابط موجود مسبقاً' },
        { status: 400 }
      );
    }

    const category = categoryService.create({
      name: body.name,
      slug: body.slug,
      description: body.description || '',
      image: body.image || '',
    });

    return NextResponse.json<ApiResponse<Category>>({
      success: true,
      data: category,
      message: 'تم إضافة التصنيف بنجاح',
    });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل إضافة التصنيف' },
      { status: 500 }
    );
  }
}
