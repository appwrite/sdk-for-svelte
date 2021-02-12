/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DocumentProps {
  document?: undefined;
}

export default class Document extends SvelteComponentTyped<
  DocumentProps,
  { change: CustomEvent<any> },
  { default: { actions: any } }
> {}
