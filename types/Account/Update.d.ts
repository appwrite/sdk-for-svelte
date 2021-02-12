/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UpdateProps {}

export default class Update extends SvelteComponentTyped<
  UpdateProps,
  {},
  { default: { actions: any } }
> {}
