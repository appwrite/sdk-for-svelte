/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ContinentsProps {}

export default class Continents extends SvelteComponentTyped<
  ContinentsProps,
  {},
  {
    default: {
      continents: any;
      actions: {
        reload: () => Promise<object>;
      };
    };
    error: { error: object };
    loading: {};
  }
> {}
