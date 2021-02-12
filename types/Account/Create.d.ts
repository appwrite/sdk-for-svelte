/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CreateProps {}

export default class Create extends SvelteComponentTyped<
  CreateProps,
  { success: CustomEvent<any>; failure: CustomEvent<any> },
  {
    default: {
      actions: {
        create: (
          email: string,
          password: string,
          name?: string
        ) => Promise<object>;
      };
    };
  }
> {}
