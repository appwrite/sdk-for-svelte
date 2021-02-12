/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FunctionProps {
  id?: undefined;

  /**
   * @default ""
   */
  search?: string;

  /**
   * @default 25
   */
  limit?: number;

  /**
   * @default 0
   */
  offset?: number;

  /**
   * @default ""
   */
  orderType?: string;
}

export default class Function extends SvelteComponentTyped<
  FunctionProps,
  {},
  {
    default: {
      executions: any;
      actions: {
        reload: () => Promise<object>;
        create: () => Promise<object>;
        get: (execution: string) => Promise<object>;
      };
    };
    error: { error: object };
    loading: {};
  }
> {}
