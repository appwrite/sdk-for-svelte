/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AuthEmailProps {}

export default class AuthEmail extends SvelteComponentTyped<
  AuthEmailProps,
  { success: CustomEvent<any>; failure: CustomEvent<any> },
  {
    default: { authorize: any };
    error: { error: any };
    loading: {};
    success: { user: any };
  }
> {}
