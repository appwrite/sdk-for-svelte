/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ImageProps {
  url?: undefined;

  /**
   * @default ""
   */
  width?: string;

  /**
   * @default ""
   */
  height?: string;
}

export default class Image extends SvelteComponentTyped<
  ImageProps,
  {},
  { default: { src: any } }
> {}
