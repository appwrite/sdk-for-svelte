/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UpdateProps {}

export default class Update extends SvelteComponentTyped<
  UpdateProps,
  {},
  {
    default: {
      actions: {
        name: (name: string) => Promise<object>;
        email: (email: string, password: string) => Promise<object>;
        password: (password: string, oldPassword: string) => Promise<object>;
      };
    };
  }
> {}
