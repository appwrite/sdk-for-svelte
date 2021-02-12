/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CollectionProps {
  id?: undefined;

  /**
   * @default []
   */
  filters?: [];

  /**
   * @default 0
   */
  offset?: number;

  /**
   * @default 50
   */
  limit?: number;

  /**
   * @default ""
   */
  orderField?: string;

  /**
   * @default ""
   */
  orderType?: string;

  /**
   * @default "string"
   */
  orderCast?: string;

  /**
   * @default ""
   */
  search?: string;

  /**
   * @default 0
   */
  first?: number;

  /**
   * @default 0
   */
  last?: number;
}

export default class Collection extends SvelteComponentTyped<
  CollectionProps,
  {},
  { default: { documents: any }; error: { error: any }; loading: {} }
> {}
