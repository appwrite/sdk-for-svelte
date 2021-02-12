/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CreditCardProps {
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

export default class CreditCard extends SvelteComponentTyped<
  CreditCardProps,
  {},
  { default: { src: any } }
> {}
