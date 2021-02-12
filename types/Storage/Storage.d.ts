/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StorageProps {}

export default class Storage extends SvelteComponentTyped<
  StorageProps,
  {
    upload: CustomEvent<any>;
    success: CustomEvent<any>;
    failure: CustomEvent<any>;
  },
  {
    default: {
      actions: {
        create: (
          file: any,
          read?: string[],
          write?: string[]
        ) => Promise<object>;
      };
    };
    error: { error: object };
  }
> {}
