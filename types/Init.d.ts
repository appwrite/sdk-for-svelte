/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AppwriteProps {
  endpoint?: undefined;

  project?: undefined;

  /**
   * @default "en"
   */
  locale?: string;
}

export default class Appwrite extends SvelteComponentTyped<
  AppwriteProps,
  {},
  { default: {} }
> {}
