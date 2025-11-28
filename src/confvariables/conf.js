const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPRITE_COLLECTION_ID),
  appwriteUserCollectionId: String(import.meta.env.VITE_APPRITE_USER_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPRITE_BUCKET_ID),
};

export default conf;
