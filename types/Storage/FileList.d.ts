/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileListProps {
  /**
   * @default ""
   */
  search?: string;

  /**
   * @default 25
   */
  limit?: number;

  /**
   * @default 0
   */
  offset?: number;

  /**
   * @default "ASC"
   */
  orderType?: string;
}

export default class FileList extends SvelteComponentTyped<
  FileListProps,
  {},
  {
    default: {
      files: any[];
      actions: {
        reload: () => Promise<object>;
      };
    };
    error: { error: object };
    loading: {};
  }
> {}
