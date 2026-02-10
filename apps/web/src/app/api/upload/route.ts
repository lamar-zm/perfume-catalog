import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import type { ApiResponse } from '@perfume-catalog/shared';

// Store uploads in data/uploads/ (NOT public/) so they are always
// served through the API route, which works reliably both in dev and production.
const uploadDir = path.join(process.cwd(), 'data', 'uploads');

async function ensureUploadDir() {
  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true });
  }
}

// POST /api/upload - Upload an image
export async function POST(request: NextRequest) {
  try {
    await ensureUploadDir();

    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'لم يتم اختيار ملف' },
        { status: 400 }
      );
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'نوع الملف غير مدعوم. يرجى استخدام JPEG, PNG, WebP, أو GIF' },
        { status: 400 }
      );
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'حجم الملف كبير جداً. الحد الأقصى 10 ميجابايت' },
        { status: 400 }
      );
    }

    // Read file buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename with normalized extension
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 8);
    const ext = file.type.split('/')[1] === 'jpeg' ? 'jpg' : file.type.split('/')[1];
    const filename = `${timestamp}-${randomStr}.${ext}`;

    // Save file to data/uploads/
    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, buffer);

    // Return URL — the rewrite in next.config.ts maps /uploads/* -> /api/uploads/*
    const url = `/uploads/${filename}`;

    return NextResponse.json<ApiResponse<{ url: string; filename: string }>>({
      success: true,
      data: { url, filename },
      message: 'تم رفع الصورة بنجاح',
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل رفع الملف' },
      { status: 500 }
    );
  }
}

// DELETE /api/upload - Delete an image
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { filename } = body;

    if (!filename) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'اسم الملف مطلوب' },
        { status: 400 }
      );
    }

    // Security: only allow deleting files from uploads directory
    const safeFilename = path.basename(filename);
    const filePath = path.join(uploadDir, safeFilename);

    // Also check old location (public/uploads) for backward compat
    const oldFilePath = path.join(process.cwd(), 'public', 'uploads', safeFilename);

    let deleted = false;
    if (existsSync(filePath)) {
      await unlink(filePath);
      deleted = true;
    }
    if (existsSync(oldFilePath)) {
      await unlink(oldFilePath);
      deleted = true;
    }

    if (!deleted) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'الملف غير موجود' },
        { status: 404 }
      );
    }

    return NextResponse.json<ApiResponse<{ filename: string }>>({
      success: true,
      data: { filename: safeFilename },
      message: 'تم حذف الملف بنجاح',
    });
  } catch (error) {
    console.error('Error deleting file:', error);
    return NextResponse.json<ApiResponse<never>>(
      { success: false, error: 'فشل حذف الملف' },
      { status: 500 }
    );
  }
}
