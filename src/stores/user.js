import { SDK as Appwrite } from "../appwrite";
import { writable } from "svelte/store";

export class UserStore {
  constructor() {
    const { subscribe, set, update } = writable(null);
    this.subscribe = subscribe;
    this.set = set;
    this.update = update;
  }

  /**
   * Reload the current User.
   * @returns {object}
   */
  async reload() {
    const response = await Appwrite.sdk.account.get();
    this.set(response);
    return response;
  }

  /**
   * Logout the current User.
   * @returns {object}
   */
  async logout() {
    const response = await Appwrite.sdk.account.deleteSession("current");
    this.set(null);
    return response;
  }
}
