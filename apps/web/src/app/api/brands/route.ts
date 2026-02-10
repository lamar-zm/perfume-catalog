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

// Helper: generate a unique English slug from name
function generateSlug(name: string): string {
  let slug = name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // If the name was entirely non-English (e.g. Arabic), use a random slug
  if (!slug) {
    slug = `brand-${Date.now().toString(36)}`;
  }

  // Ensure uniqueness by appending a suffix if slug already exists
  let finalSlug = slug;
  let counter = 1;
  while (brandService.getBySlug(finalSlug)) {
    finalSlug = `${slug}-${counter}`;
    counter++;
  }
  return finalSlug;
}

// POST /api/brands - Create a new brand
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'الاسم مطلوب' },
        { status: 400 }
      );
    }

    // Auto-generate slug from name
    const slug = generateSlug(body.name);

    const brand = brandService.create({
      name: body.name,
      slug,
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
