import { NextRequest, NextResponse } from 'next/server';
import type { ApiResponse, AuthResponse } from '@perfume-catalog/shared';

// Static admin credentials
const ADMIN_EMAIL = 'admin@email.com';
const ADMIN_PASSWORD = '123456';
const ADMIN_USER = {
  id: 'admin-1',
  email: ADMIN_EMAIL,
  displayName: 'مدير النظام',
  role: 'superadmin' as const,
  createdAt: new Date().toISOString(),
};

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

    // Static credential check
    if (body.email !== ADMIN_EMAIL || body.password !== ADMIN_PASSWORD) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' },
        { status: 401 }
      );
    }

    // Generate a simple token
    const token = Buffer.from(`${ADMIN_USER.id}:${Date.now()}`).toString('base64');

    const result: AuthResponse = {
      success: true,
      user: ADMIN_USER,
      token,
    };

    // Set auth token in cookie
    const response = NextResponse.json<ApiResponse<AuthResponse>>({
      success: true,
      data: result,
      message: 'تم تسجيل الدخول بنجاح',
    });

    // Set HTTP-only cookie with token
    response.cookies.set('auth_token', token, {
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

    // Validate token (simple check - token should contain admin-1)
    try {
      const decoded = Buffer.from(token, 'base64').toString('utf-8');
      const [adminId] = decoded.split(':');
      if (adminId !== 'admin-1') {
        return NextResponse.json<ApiResponse<never>>(
          { success: false, error: 'جلسة غير صالحة' },
          { status: 401 }
        );
      }
    } catch {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'جلسة غير صالحة' },
        { status: 401 }
      );
    }

    return NextResponse.json<ApiResponse<typeof ADMIN_USER>>({
      success: true,
      data: ADMIN_USER,
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
