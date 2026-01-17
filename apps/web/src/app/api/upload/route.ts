import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, unlink } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import type { ApiResponse } from '@perfume-catalog/shared';

// Create uploads directory if it doesn't exist
const uploadDir = path.join(process.cwd(), 'public', 'uploads');

async function ensureUploadDir() {
  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true });
  }
}

// Simple image compression by reducing quality
async function compressImage(buffer: Buffer, mimeType: string): Promise<Buffer> {
  // For now, return the original buffer
  // In production, you could use sharp:
  // const sharp = (await import('sharp')).default;
  // return sharp(buffer).resize(800, 800, { fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 80 }).toBuffer();
  return buffer;
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
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'حجم الملف كبير جداً. الحد الأقصى 10 ميجابايت' },
        { status: 400 }
      );
    }

    // Read file buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Compress image
    const compressedBuffer = await compressImage(buffer, file.type);

    // Generate unique filename
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 8);
    const extension = file.name.split('.').pop() || 'jpg';
    const filename = `${timestamp}-${randomStr}.${extension}`;

    // Save file
    const filePath = path.join(uploadDir, filename);
    await writeFile(filePath, compressedBuffer);

    // Return URL
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

    // Check if file exists
    if (!existsSync(filePath)) {
      return NextResponse.json<ApiResponse<never>>(
        { success: false, error: 'الملف غير موجود' },
        { status: 404 }
      );
    }

    // Delete file
    await unlink(filePath);

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
