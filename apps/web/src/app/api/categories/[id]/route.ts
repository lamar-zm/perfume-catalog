import { NextRequest, NextResponse } from 'next/server';
import { categoryService, perfumeService } from '@perfume-catalog/database';
import type { ApiResponse, Category, Perfume, PaginatedResult } from '@perfume-catalog/shared';

// GET /api/categories/[id] - Get a specific category (by ID or slug)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const searchParams = request.nextUrl.searchParams;
    
    // Try to find by ID first, then by slug
    let category = categoryService.getById(id) || categoryService.getBySlug(id);

    if (!category) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'التصنيف غير موجود' },
        { status: 404 }
      );
    }

    // Check if requesting perfumes for this category
    if (searchParams.get('perfumes') === 'true') {
      const page = parseInt(searchParams.get('page') || '1');
      const pageSize = parseInt(searchParams.get('pageSize') || '12');
      const perfumes = perfumeService.getByCategory(category.id, { page, pageSize });
      
      return NextResponse.json<ApiResponse<{ category: Category; perfumes: PaginatedResult<Perfume> }>>({
        success: true,
        data: { category, perfumes },
      });
    }

    return NextResponse.json<ApiResponse<Category>>({
      success: true,
      data: category,
    });
  } catch (error) {
    console.error('Error fetching category:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل تحميل التصنيف' },
      { status: 500 }
    );
  }
}

// PUT /api/categories/[id] - Update a category
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Check if category exists
    const existing = categoryService.getById(id);
    if (!existing) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'التصنيف غير موجود' },
        { status: 404 }
      );
    }

    // Auto-regenerate slug when name changes
    if (body.name && body.name !== existing.name) {
      let slug = body.name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      if (!slug) {
        slug = `category-${Date.now().toString(36)}`;
      }

      // Ensure uniqueness
      let finalSlug = slug;
      let counter = 1;
      while (true) {
        const slugOwner = categoryService.getBySlug(finalSlug);
        if (!slugOwner || slugOwner.id === id) break;
        finalSlug = `${slug}-${counter}`;
        counter++;
      }
      body.slug = finalSlug;
    } else {
      // Don't allow client to override slug directly
      delete body.slug;
    }

    const updated = categoryService.update(id, body);

    return NextResponse.json<ApiResponse<Category>>({
      success: true,
      data: updated!,
      message: 'تم تحديث التصنيف بنجاح',
    });
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل تحديث التصنيف' },
      { status: 500 }
    );
  }
}

// DELETE /api/categories/[id] - Delete a category
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deleted = categoryService.delete(id);

    if (!deleted) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'التصنيف غير موجود' },
        { status: 404 }
      );
    }

    return NextResponse.json<ApiResponse<{ id: string }>>({
      success: true,
      data: { id },
      message: 'تم حذف التصنيف بنجاح',
    });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل حذف التصنيف' },
      { status: 500 }
    );
  }
}
