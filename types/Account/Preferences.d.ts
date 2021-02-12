/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PreferencesProps {}

export default class Preferences extends SvelteComponentTyped<
  PreferencesProps,
  {},
  { default: { prefs: any; actions: any }; error: { error: any }; loading: {} }
> {}
