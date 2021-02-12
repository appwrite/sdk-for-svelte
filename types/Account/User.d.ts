/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UserProps {}

export default class User extends SvelteComponentTyped<
  UserProps,
  {
    success: CustomEvent<any>;
    failure: CustomEvent<any>;
    successLogout: CustomEvent<any>;
    failureLogout: CustomEvent<any>;
    successLogoutFrom: CustomEvent<any>;
    failureLogoutFrom: CustomEvent<any>;
    successLogoutAll: CustomEvent<any>;
    failureLogoutAll: CustomEvent<any>;
  },
  {
    default: {
      actions: {
        reload: () => void;
        logout: () => Promise<object>;
        logoutFrom: (session: string) => Promise<object>;
        logoutAll: () => Promise<object>;
      };
    };
    error: { error: object };
    loading: {};
  }
> {}
