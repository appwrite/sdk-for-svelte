/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FaviconProps {
  url?: undefined;
}

export default class Favicon extends SvelteComponentTyped<
  FaviconProps,
  {},
  { default: { src: any } }
> {}
