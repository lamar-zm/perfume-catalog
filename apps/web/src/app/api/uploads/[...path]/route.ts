import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

// Primary location: data/uploads/ (new)
// Fallback location: public/uploads/ (old, for backward compatibility)
const uploadDir = path.join(process.cwd(), 'data', 'uploads');
const legacyUploadDir = path.join(process.cwd(), 'public', 'uploads');

const MIME_TYPES: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
};

export const dynamic = 'force-dynamic';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: pathSegments } = await params;
    // Only use the basename to prevent directory traversal
    const filename = path.basename(pathSegments.join('/'));

    // Try the new location first, then fall back to the legacy location
    let filePath = path.join(uploadDir, filename);
    if (!existsSync(filePath)) {
      filePath = path.join(legacyUploadDir, filename);
    }

    if (!existsSync(filePath)) {
      return new NextResponse('Not found', { status: 404 });
    }

    const ext = path.extname(filename).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving uploaded file:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
