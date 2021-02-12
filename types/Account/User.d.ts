/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UserProps {}

export default class User extends SvelteComponentTyped<
  UserProps,
  {
    success: CustomEvent<any>;
    failure: CustomEvent<any>;
    successLogout: CustomEvent<any>;
    successLogoutFrom: CustomEvent<any>;
    failureLogoutFrom: CustomEvent<any>;
    successLogoutAll: CustomEvent<any>;
    failureLogoutAll: CustomEvent<any>;
  },
  { default: { user: any; actions: any }; error: { error: any }; loading: {} }
> {}
