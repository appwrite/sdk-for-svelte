/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CollectionProps {
  id?: string;

  /**
   * @default []
   */
  filters?: string[];

  /**
   * @default 0
   */
  offset?: number;

  /**
   * @default 25
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
   * @default false
   */
  cache?: boolean;
}

export default class Collection extends SvelteComponentTyped<
  CollectionProps,
  {},
  {
    default: {
      documents: any[];
      actions: {
        reload: () => Promise<object>;
        create: (
          data: any,
          read?: string[],
          write?: string[]
        ) => Promise<object>;
      };
    };
    error: { error: object };
    loading: {};
  }
> {}
