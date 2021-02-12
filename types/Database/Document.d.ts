/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DocumentProps {
  document?: undefined;
}

export default class Document extends SvelteComponentTyped<
  DocumentProps,
  { change: CustomEvent<any> },
  {
    default: {
      documents: any;
      actions: {
        update: (data: any) => Promise<object>;
        remove: () => Promise<object>;
      };
    };
  }
> {}
