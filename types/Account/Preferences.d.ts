/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PreferencesProps {}

export default class Preferences extends SvelteComponentTyped<
  PreferencesProps,
  {},
  {
    default: {
      actions: {
        reload: () => Promise<void>;
        update: (prefs: object) => Promise<object>;
      };
    };
    error: { error: object };
    loading: {};
  }
> {}
