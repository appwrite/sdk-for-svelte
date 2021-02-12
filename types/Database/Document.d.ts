/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DocumentProps {
  id?: undefined;

  collection?: undefined;

  document?: undefined;
}

export default class Document extends SvelteComponentTyped<
  DocumentProps,
  { change: CustomEvent<any> },
  {
    default: {
      documents: any;
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
