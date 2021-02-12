/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DeleteProps {}

export default class Delete extends SvelteComponentTyped<
  DeleteProps,
  {},
  { default: { actions: any } }
> {}
