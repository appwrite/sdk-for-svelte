/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DocumentProps {
  id?: string;

  collection?: string;

  document?: any;

  cache?: boolean;
}

export default class Document extends SvelteComponentTyped<
  DocumentProps,
  { change: CustomEvent<any> },
  {
    default: {
      document: any;
      actions: {
        reload: () => Promise<object>;
        update: (data: any) => Promise<object>;
        remove: () => Promise<object>;
      };
    };
    error: { error: any };
    loading: {};
  }
> {}
