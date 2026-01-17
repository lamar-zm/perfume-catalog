// ============================================
// Image Service - Firebase Storage Ready
// Replace implementation with Firebase later
// ============================================

export interface UploadResult {
  url: string;
  path: string;
}

export const imageService = {
  /**
   * Upload an image (mocked for now)
   */
  async upload(file: File, folder: string): Promise<UploadResult> {
    // TODO: Replace with Firebase Storage upload
    // const storageRef = ref(storage, `${folder}/${Date.now()}_${file.name}`);
    // await uploadBytes(storageRef, file);
    // const url = await getDownloadURL(storageRef);
    // return { url, path: storageRef.fullPath };

    // Mock implementation - create object URL
    const mockUrl = URL.createObjectURL(file);
    const mockPath = `${folder}/${Date.now()}_${file.name}`;

    return Promise.resolve({
      url: mockUrl,
      path: mockPath,
    });
  },

  /**
   * Delete an image
   */
  async delete(path: string): Promise<boolean> {
    // TODO: Replace with Firebase Storage delete
    // const storageRef = ref(storage, path);
    // await deleteObject(storageRef);

    console.log(`Mock delete image: ${path}`);
    return Promise.resolve(true);
  },

  /**
   * Get image URL from path
   */
  async getUrl(path: string): Promise<string> {
    // TODO: Replace with Firebase Storage getDownloadURL
    // const storageRef = ref(storage, path);
    // return await getDownloadURL(storageRef);

    // Return mock URL or placeholder
    return Promise.resolve(path.startsWith('/') ? path : `/images/${path}`);
  },

  /**
   * Generate placeholder image URL
   */
  getPlaceholder(width: number = 400, height: number = 400): string {
    return '/images/placeholder.svg';
  },
};
