import { NextRequest, NextResponse } from 'next/server';
import { authService } from '@perfume-catalog/database';
import type { ApiResponse, AuthResponse } from '@perfume-catalog/shared';

// POST /api/auth - Login
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (!body.email || !body.password) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'البريد الإلكتروني وكلمة المرور مطلوبان' },
        { status: 400 }
      );
    }

    const result = await authService.signIn({
      email: body.email,
      password: body.password,
    });

    if (!result.success) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: result.error },
        { status: 401 }
      );
    }

    // Set auth token in cookie
    const response = NextResponse.json<ApiResponse<AuthResponse>>({
      success: true,
      data: result,
      message: 'تم تسجيل الدخول بنجاح',
    });

    // Set HTTP-only cookie with token
    response.cookies.set('auth_token', result.token!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل تسجيل الدخول' },
      { status: 500 }
    );
  }
}

// GET /api/auth - Get current user
export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'غير مصرح' },
        { status: 401 }
      );
    }

    const admin = authService.validateToken(token);

    if (!admin) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'جلسة غير صالحة' },
        { status: 401 }
      );
    }

    return NextResponse.json<ApiResponse<typeof admin>>({
      success: true,
      data: admin,
    });
  } catch (error) {
    console.error('Error getting current user:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل التحقق من المستخدم' },
      { status: 500 }
    );
  }
}

// DELETE /api/auth - Logout
export async function DELETE() {
  try {
    const response = NextResponse.json<ApiResponse<null>>({
      success: true,
      data: null,
      message: 'تم تسجيل الخروج بنجاح',
    });

    // Clear auth cookie
    response.cookies.set('auth_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Error during logout:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل تسجيل الخروج' },
      { status: 500 }
    );
  }
}
