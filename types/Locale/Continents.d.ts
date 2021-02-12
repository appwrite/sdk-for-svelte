/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ContinentsProps {}

export default class Continents extends SvelteComponentTyped<
  ContinentsProps,
  {},
  {
    default: { continents: any; actions: any };
    error: { error: any };
    loading: {};
  }
> {}
