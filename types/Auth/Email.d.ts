/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AuthEmailProps {}

export default class AuthEmail extends SvelteComponentTyped<
  AuthEmailProps,
  { success: CustomEvent<any>; failure: CustomEvent<any> },
  {
    default: {
      authorize: (email: string, password: string) => Promise<object>;
    };
    error: { error: object };
    loading: {};
    success: { user: any };
  }
> {}
