import bcrypt from 'bcryptjs';
import db from '../db';
import type { Admin, AuthResponse, LoginCredentials } from '@perfume-catalog/shared';

// Helper to convert DB row to Admin
function rowToAdmin(row: any): Admin {
  return {
    id: row.id,
    email: row.email,
    displayName: row.display_name || 'مدير النظام',
    role: row.role || 'admin',
    createdAt: row.created_at,
  };
}

export const authService = {
  async signIn(credentials: LoginCredentials): Promise<AuthResponse> {
    const { email, password } = credentials;

    const row = db.prepare('SELECT * FROM admins WHERE email = ?').get(email) as any;
    
    if (!row) {
      return {
        success: false,
        error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
      };
    }

    const isValid = await bcrypt.compare(password, row.password);
    
    if (!isValid) {
      return {
        success: false,
        error: 'البريد الإلكتروني أو كلمة المرور غير صحيحة',
      };
    }

    const admin = rowToAdmin(row);
    
    // Generate a simple token (in production, use JWT)
    const token = Buffer.from(`${admin.id}:${Date.now()}`).toString('base64');

    return {
      success: true,
      user: admin,
      token,
    };
  },

  getById(id: string): Admin | null {
    const row = db.prepare('SELECT * FROM admins WHERE id = ?').get(id);
    return row ? rowToAdmin(row) : null;
  },

  getByEmail(email: string): Admin | null {
    const row = db.prepare('SELECT * FROM admins WHERE email = ?').get(email);
    return row ? rowToAdmin(row) : null;
  },

  async createAdmin(email: string, password: string, displayName: string = 'مدير النظام', role: 'admin' | 'superadmin' = 'admin'): Promise<Admin> {
    const id = `admin-${Date.now()}`;
    const now = new Date().toISOString();
    const hashedPassword = await bcrypt.hash(password, 10);

    db.prepare(`
      INSERT INTO admins (id, email, password, display_name, role, created_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(id, email, hashedPassword, displayName, role, now);

    return this.getById(id)!;
  },

  validateToken(token: string): Admin | null {
    try {
      const decoded = Buffer.from(token, 'base64').toString('utf-8');
      const [adminId] = decoded.split(':');
      return this.getById(adminId);
    } catch {
      return null;
    }
  },
};
