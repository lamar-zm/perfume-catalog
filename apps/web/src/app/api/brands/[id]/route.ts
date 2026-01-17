import { NextRequest, NextResponse } from 'next/server';
import { brandService, perfumeService } from '@perfume-catalog/database';
import type { ApiResponse, Brand, Perfume, PaginatedResult } from '@perfume-catalog/shared';

// GET /api/brands/[id] - Get a specific brand (by ID or slug)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const searchParams = request.nextUrl.searchParams;
    
    // Try to find by ID first, then by slug
    let brand = brandService.getById(id) || brandService.getBySlug(id);

    if (!brand) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'الماركة غير موجودة' },
        { status: 404 }
      );
    }

    // Check if requesting perfumes for this brand
    if (searchParams.get('perfumes') === 'true') {
      const page = parseInt(searchParams.get('page') || '1');
      const pageSize = parseInt(searchParams.get('pageSize') || '12');
      const perfumes = perfumeService.getByBrand(brand.id, { page, pageSize });
      
      return NextResponse.json<ApiResponse<{ brand: Brand; perfumes: PaginatedResult<Perfume> }>>({
        success: true,
        data: { brand, perfumes },
      });
    }

    return NextResponse.json<ApiResponse<Brand>>({
      success: true,
      data: brand,
    });
  } catch (error) {
    console.error('Error fetching brand:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل تحميل الماركة' },
      { status: 500 }
    );
  }
}

// PUT /api/brands/[id] - Update a brand
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Check if brand exists
    const existing = brandService.getById(id);
    if (!existing) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'الماركة غير موجودة' },
        { status: 404 }
      );
    }

    // Check if new slug already exists (for different brand)
    if (body.slug && body.slug !== existing.slug) {
      const slugExists = brandService.getBySlug(body.slug);
      if (slugExists) {
        return NextResponse.json<ApiResponse<never>>(
          { success: false, error: 'الرابط موجود مسبقاً' },
          { status: 400 }
        );
      }
    }

    const updated = brandService.update(id, body);

    return NextResponse.json<ApiResponse<Brand>>({
      success: true,
      data: updated!,
      message: 'تم تحديث الماركة بنجاح',
    });
  } catch (error) {
    console.error('Error updating brand:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل تحديث الماركة' },
      { status: 500 }
    );
  }
}

// DELETE /api/brands/[id] - Delete a brand
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deleted = brandService.delete(id);

    if (!deleted) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'الماركة غير موجودة' },
        { status: 404 }
      );
    }

    return NextResponse.json<ApiResponse<{ id: string }>>({
      success: true,
      data: { id },
      message: 'تم حذف الماركة بنجاح',
    });
  } catch (error) {
    console.error('Error deleting brand:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل حذف الماركة' },
      { status: 500 }
    );
  }
}
