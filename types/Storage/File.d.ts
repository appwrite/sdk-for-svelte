/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileProps {
  file?: undefined;
}

export default class File extends SvelteComponentTyped<
  FileProps,
  {},
  {
    default: {
      file: any;
      actions: {
        download: () => string;
        view: (as?: string) => string;
        preview: (
          width?: string,
          height?: string,
          quality?: string,
          background?: string,
          output?: string
        ) => string;
        update: (read?: any, write?: any) => Promise<object>;
        delete: () => Promise<object>;
      };
    };
    error: { error: object };
  }
> {}
