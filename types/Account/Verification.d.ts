/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VerificationProps {}

export default class Verification extends SvelteComponentTyped<
  VerificationProps,
  {},
  {
    default: {
      actions: {
        create: (url: string) => Promise<object>;
        complete: (user: string, secret: string) => Promise<object>;
      };
    };
  }
> {}
