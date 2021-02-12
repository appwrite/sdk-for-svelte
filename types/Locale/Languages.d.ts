/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LanguagesProps {}

export default class Languages extends SvelteComponentTyped<
  LanguagesProps,
  {},
  {
    default: {
      languages: any;
      actions: {
        reload: () => Promise<object>;
      };
    };
    error: { error: object };
    loading: {};
  }
> {}
