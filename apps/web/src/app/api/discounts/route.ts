import { NextRequest, NextResponse } from 'next/server';
import { perfumeService } from '@perfume-catalog/database';
import type { ApiResponse, Perfume } from '@perfume-catalog/shared';

// GET /api/discounts - Get all perfumes with discounts
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
    
    const perfumes = perfumeService.getDiscounted(limit);
    
    return NextResponse.json<ApiResponse<Perfume[]>>({
      success: true,
      data: perfumes,
    });
  } catch (error) {
    console.error('Error fetching discounts:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل تحميل الخصومات' },
      { status: 500 }
    );
  }
}

// POST /api/discounts - Apply discount to a perfume
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.perfumeId || body.discount === undefined) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'معرف العطر والخصم مطلوبان' },
        { status: 400 }
      );
    }

    const perfume = perfumeService.getById(body.perfumeId);
    if (!perfume) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'العطر غير موجود' },
        { status: 404 }
      );
    }

    if (body.discount >= perfume.price) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'الخصم يجب أن يكون أقل من السعر' },
        { status: 400 }
      );
    }

    const updated = perfumeService.updateDiscount(body.perfumeId, body.discount);

    return NextResponse.json<ApiResponse<Perfume>>({
      success: true,
      data: updated!,
      message: 'تم تطبيق الخصم بنجاح',
    });
  } catch (error) {
    console.error('Error applying discount:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل تطبيق الخصم' },
      { status: 500 }
    );
  }
}

// DELETE /api/discounts - Remove discount from a perfume
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.perfumeId) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'معرف العطر مطلوب' },
        { status: 400 }
      );
    }

    const perfume = perfumeService.getById(body.perfumeId);
    if (!perfume) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'العطر غير موجود' },
        { status: 404 }
      );
    }

    const updated = perfumeService.updateDiscount(body.perfumeId, 0);

    return NextResponse.json<ApiResponse<Perfume>>({
      success: true,
      data: updated!,
      message: 'تم إزالة الخصم بنجاح',
    });
  } catch (error) {
    console.error('Error removing discount:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل إزالة الخصم' },
      { status: 500 }
    );
  }
}
