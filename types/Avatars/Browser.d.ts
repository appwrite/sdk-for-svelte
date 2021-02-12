/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BrowserProps {
  code?: undefined;

  /**
   * @default 100
   */
  width?: number;

  /**
   * @default 100
   */
  height?: number;

  /**
   * @default 100
   */
  quality?: number;
}

export default class Browser extends SvelteComponentTyped<
  BrowserProps,
  {},
  { default: { src: any } }
> {}
