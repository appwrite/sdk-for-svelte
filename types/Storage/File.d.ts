/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileProps {
  file?: undefined;
}

export default class File extends SvelteComponentTyped<
  FileProps,
  {},
  { default: { actions: any } }
> {}
