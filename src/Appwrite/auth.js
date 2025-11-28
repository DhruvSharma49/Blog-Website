import conf from "../confvariables/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID
    this.account = new Account(this.client);
  }

  // Create Account + Auto Login (safe from duplicate session issue)
  async createAccount({ email, password, name }) {
    try {
      // Create new account
      await this.account.create(ID.unique(), email, password, name);

      // Delete any existing session (prevents duplicate-session error)
      await this.account.deleteSession("current").catch(() => {});

      // Create new session (auto login)
      const session = await this.login({ email, password });

      // Return current logged-in user
      const currentUser = await this.account.get();
      return currentUser;
    } catch (error) {
      console.error("Appwrite :: createAccount ::", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      // Delete any existing session (safe)
      await this.account.deleteSession("current").catch(() => {});

      // Create new session
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      console.log("Login session:", session); // Debug: check session returned
      return session;
    } catch (error) {
      console.error("Login failed:", error); // Debug: log any error
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch {
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSession("current");
    } catch (error) {
      console.error("Appwrite :: logout ::", error);
    }
  }

  async deleteAccount() {
    try {
      await this.account.delete();
      console.log("✅ Account deleted successfully.");
      return true;
    } catch (error) {
      console.error("Appwrite :: deleteAccount ::", error);
      return false;
    }
  }
}

const authService = new AuthService();
export default authService;
