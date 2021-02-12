/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AuthOAuth2Props {
  provider?: undefined;

  success?: undefined;

  failure?: undefined;
}

export default class AuthOAuth2 extends SvelteComponentTyped<
  AuthOAuth2Props,
  {},
  {
    default: {
      authorize: (
        provider: string,
        success: string,
        failure: string
      ) => Promise<object>;
    };
  }
> {}
