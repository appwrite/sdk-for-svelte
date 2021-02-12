/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FlagProps {
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

export default class Flag extends SvelteComponentTyped<
  FlagProps,
  {},
  { default: { src: any } }
> {}
