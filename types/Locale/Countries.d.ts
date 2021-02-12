/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CountriesProps {
  /**
   * @default false
   */
  eu?: boolean;
}

export default class Countries extends SvelteComponentTyped<
  CountriesProps,
  {},
  {
    default: {
      countries: any;
      actions: {
        reload: () => Promise<object>;
      };
    };
    error: { error: object };
    loading: {};
  }
> {}
