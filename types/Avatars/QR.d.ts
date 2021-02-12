/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QRProps {
  text?: undefined;

  /**
   * @default 400
   */
  size?: number;

  /**
   * @default 1
   */
  margin?: number;

  /**
   * @default false
   */
  download?: boolean;
}

export default class QR extends SvelteComponentTyped<
  QRProps,
  {},
  { default: { src: any } }
> {}
