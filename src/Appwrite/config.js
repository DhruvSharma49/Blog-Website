import conf from "../confvariables/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // ---------------------- POSTS ----------------------
  async createPost({ title, content, featuredImage, status, userid }) {
    try {
      // ✅ Get the user document (based on userid from authentication)
      const userDoc = await this.getUserByAccountId(userid);
      if (!userDoc || !userDoc.$id) throw new Error("User document not found");
      // console.log("Creating post with slug :", slug);
      // console.log("slug type :", typeof slug, "value:", slug);

      // ✅ Create the post and connect relationship with user document
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),

        {
          title,
          content,
          featuredImage,
          status,
          users: userDoc.$id, // ✅ work perfect
          // users: [userDoc.$id], //showing error
          userid: userDoc.userid,
        }
      );
    } catch (error) {
      console.error("Appwrite service :: createPost :: error", error);
      throw error;
    }
  }

  async updatePost(postId, { title, content, featuredImage, status }) {
    try {
      // Get existing post first
      const existing = await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId
      );

      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId,
        {
          title,
          content,
          featuredImage,
          status,

          // 🔥 Most important — keep relationship same
          users: existing.users,
        }
      );
    } catch (error) {
      console.error("Appwrite service :: updatePost :: error", error);
      throw error;
    }
  }

  async deletePost(postId) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId
      );
      return true;
    } catch (error) {
      console.error("Appwrite service :: deletePost :: error", error);
      return false;
    }
  }

  async getPost(postId) {
    try {
      const post = await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId
      );

      const user =
        post.users && post.users.$id
          ? await this.getUserById(post.users.$id)
          : null;

      return { ...post, user };
    } catch (error) {
      console.error("Appwrite service :: getPost :: error", error);
      return null;
    }
  }

  async getPosts(queries = [Query.equal("status", "public")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.error("Appwrite service :: getPosts :: error", error);
      return [];
    }
  }

  // ---------------------- FILES ----------------------
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Appwrite service :: uploadFile :: error", error);
      return null;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  getFileView(fileId) {
    try {
      return this.bucket.getFileView(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.error("Appwrite service :: getFileView :: error", error);
      return null;
    }
  }

  // ---------------------- USERS ----------------------
  async createUserDoc({
    userid,
    name,
    bio = "",
    avatarURL = "",
    coverURL = "",
  }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUserCollectionId,
        ID.unique(),
        { userid, name, bio, avatarURL, coverURL }
      );
    } catch (error) {
      console.error("Appwrite service :: createUserDoc :: error", error);
      throw error;
    }
  }

  async updateUserDoc(docId, data) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUserCollectionId,
        docId,
        data
      );
    } catch (error) {
      console.error("Appwrite service :: updateUserDoc :: error", error);
      throw error;
    }
  }

  async getUserByAccountId(userid) {
    try {
      const res = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteUserCollectionId,
        [Query.equal("userid", userid)]
      );
      return res.documents[0] || null;
    } catch (error) {
      console.error("Appwrite service :: getUserByAccountId :: error", error);
      return null;
    }
  }

  async getUserById(docId) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteUserCollectionId,
        docId
      );
    } catch (error) {
      console.error("Appwrite service :: getUserById :: error", error);
      return null;
    }
  }

  async searchUsersByName(name) {
    try {
      const res = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteUserCollectionId,
        [
          // Search jisme name field me name ka part match ho
          Query.search("name", name),
        ]
      );
      return res.documents || [];
    } catch (error) {
      console.error("Appwrite service :: searchUsersByName :: error", error);
      throw error;
    }
  }
}

const service = new Service();
export default service;
