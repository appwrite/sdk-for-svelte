/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LocaleProps {}

export default class Locale extends SvelteComponentTyped<
  LocaleProps,
  {},
  {
    default: {
      code: any;
      actions: {
        reload: () => Promise<object>;
      };
    };
    error: { error: object };
    loading: {};
  }
> {}
