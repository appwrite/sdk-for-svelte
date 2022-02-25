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
  cursor?: string;

  /**
   * @default ""
   */
  cursorDirection?: string[];

  /**
   * @default "[]"
   */
   orderAttributes?: string[];

  /**
   * @default "[]"
   */
  orderTypes?: string[];

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
          documentId: string,
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
