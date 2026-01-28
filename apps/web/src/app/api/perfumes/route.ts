import { NextRequest, NextResponse } from 'next/server';
import { perfumeService } from '@perfume-catalog/database';
import type { ApiResponse, Perfume, PaginatedResult } from '@perfume-catalog/shared';

// GET /api/perfumes - Get all perfumes with pagination and filters
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    const page = parseInt(searchParams.get('page') || '1');
    const pageSize = parseInt(searchParams.get('pageSize') || '12');
    const categoryId = searchParams.get('categoryId') || undefined;
    const brandId = searchParams.get('brandId') || undefined;
    const hasDiscount = searchParams.get('hasDiscount') === 'true';
    const search = searchParams.get('search') || undefined;
    const sortField = searchParams.get('sortField') as keyof Perfume | undefined;
    const sortDirection = searchParams.get('sortDirection') as 'asc' | 'desc' | undefined;

    // Special endpoints
    const endpoint = searchParams.get('endpoint');
    
    if (endpoint === 'most-sold') {
      const limit = parseInt(searchParams.get('limit') || '8');
      const data = perfumeService.getMostSold(limit);
      return NextResponse.json<ApiResponse<Perfume[]>>({
        success: true,
        data,
      });
    }

    // remove featured endpoint - most-sold handled separately

    if (endpoint === 'discounted') {
      const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
      const data = perfumeService.getDiscounted(limit);
      return NextResponse.json<ApiResponse<Perfume[]>>({
        success: true,
        data,
      });
    }

    const filters = {
      categoryId,
      brandId,
      hasDiscount,
      search,
    };

    const sort = sortField && sortDirection ? { field: sortField, direction: sortDirection } : undefined;

    const result = perfumeService.getAll({ page, pageSize }, filters, sort);
    
    return NextResponse.json<ApiResponse<PaginatedResult<Perfume>>>({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error('Error fetching perfumes:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل تحميل العطور' },
      { status: 500 }
    );
  }
}

// POST /api/perfumes - Create a new perfume
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.title || !body.price) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'العنوان والسعر مطلوبان' },
        { status: 400 }
      );
    }

    // Validate discount
    if (body.discount && body.discount >= body.price) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'الخصم يجب أن يكون أقل من السعر' },
        { status: 400 }
      );
    }

    const perfume = perfumeService.create({
      title: body.title,
      description: body.description || '',
      price: body.price,
      discount: body.discount || 0,
      gender: body.gender || 'unisex',
      coverImage: body.coverImage || '',
      outOfStock: body.outOfStock || false,
      categoryId: body.categoryId || '',
      brandId: body.brandId || '',
      salesCount: body.salesCount || 0,
      images: body.images || [],
      notes: body.notes || [],
    });

    return NextResponse.json<ApiResponse<Perfume>>({
      success: true,
      data: perfume,
      message: 'تم إضافة العطر بنجاح',
    });
  } catch (error) {
    console.error('Error creating perfume:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل إضافة العطر' },
      { status: 500 }
    );
  }
}
