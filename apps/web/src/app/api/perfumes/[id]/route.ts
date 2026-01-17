import { NextRequest, NextResponse } from 'next/server';
import { perfumeService } from '@perfume-catalog/database';
import type { ApiResponse, Perfume } from '@perfume-catalog/shared';

// GET /api/perfumes/[id] - Get a specific perfume
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const perfume = perfumeService.getById(id);

    if (!perfume) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'العطر غير موجود' },
        { status: 404 }
      );
    }

    // Check for related endpoint
    const searchParams = request.nextUrl.searchParams;
    if (searchParams.get('related') === 'true') {
      const limit = parseInt(searchParams.get('limit') || '4');
      const related = perfumeService.getRelated(id, perfume.categoryId, limit);
      return NextResponse.json<ApiResponse<Perfume[]>>({
        success: true,
        data: related,
      });
    }

    return NextResponse.json<ApiResponse<Perfume>>({
      success: true,
      data: perfume,
    });
  } catch (error) {
    console.error('Error fetching perfume:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل تحميل العطر' },
      { status: 500 }
    );
  }
}

// PUT /api/perfumes/[id] - Update a perfume
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Check if perfume exists
    const existing = perfumeService.getById(id);
    if (!existing) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'العطر غير موجود' },
        { status: 404 }
      );
    }

    // Validate discount
    const price = body.price ?? existing.price;
    const discount = body.discount ?? existing.discount;
    if (discount >= price) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'الخصم يجب أن يكون أقل من السعر' },
        { status: 400 }
      );
    }

    const updated = perfumeService.update(id, body);

    return NextResponse.json<ApiResponse<Perfume>>({
      success: true,
      data: updated!,
      message: 'تم تحديث العطر بنجاح',
    });
  } catch (error) {
    console.error('Error updating perfume:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل تحديث العطر' },
      { status: 500 }
    );
  }
}

// DELETE /api/perfumes/[id] - Delete a perfume
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deleted = perfumeService.delete(id);

    if (!deleted) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'العطر غير موجود' },
        { status: 404 }
      );
    }

    return NextResponse.json<ApiResponse<{ id: string }>>({
      success: true,
      data: { id },
      message: 'تم حذف العطر بنجاح',
    });
  } catch (error) {
    console.error('Error deleting perfume:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل حذف العطر' },
      { status: 500 }
    );
  }
}

// PATCH /api/perfumes/[id] - Partial update (toggle featured, update discount)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    // Check if perfume exists
    const existing = perfumeService.getById(id);
    if (!existing) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'العطر غير موجود' },
        { status: 404 }
      );
    }

    let updated: Perfume | null = null;

    // Toggle featured
    if (body.action === 'toggleFeatured') {
      updated = perfumeService.toggleFeatured(id);
    }
    // Update discount
    else if (body.action === 'updateDiscount' && body.discount !== undefined) {
      if (body.discount >= existing.price) {
        return NextResponse.json<ApiResponse<never>>(
          { success: false, error: 'الخصم يجب أن يكون أقل من السعر' },
          { status: 400 }
        );
      }
      updated = perfumeService.updateDiscount(id, body.discount);
    }
    // Regular partial update
    else {
      updated = perfumeService.update(id, body);
    }

    return NextResponse.json<ApiResponse<Perfume>>({
      success: true,
      data: updated!,
      message: 'تم تحديث العطر بنجاح',
    });
  } catch (error) {
    console.error('Error updating perfume:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل تحديث العطر' },
      { status: 500 }
    );
  }
}
