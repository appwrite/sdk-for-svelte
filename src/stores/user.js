import { SDK as Appwrite }  from "../appwrite";
import { writable } from "svelte/store";

export const userStore = (value) => {
  const { subscribe, set, update } = writable(value);

  return {
    subscribe,
    set,
    update,

    reload: async () => {
      const response = await Appwrite.sdk.account.get();
      set(response);
      return response;
    },
    logout: async () => {
      const response = await Appwrite.sdk.account.deleteSession("current");
      set(false);
      return response;
    }
  }
}
