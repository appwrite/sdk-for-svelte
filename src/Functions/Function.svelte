<script>
  /**
   * @slot {{
   * executions: any;
   * actions: {
   *  reload: () => Promise<object>;
   *  create: () => Promise<object>;
   *  get: (execution: string) => Promise<object>;
   * }}}
   * @slot {{ error: object }} error
   */
  import { SDK as Appwrite } from "../appwrite";

  export let id;
  export let search = "";
  export let limit = 25;
  export let offset = 0;
  export let orderType = "";

  const fetchExecutions = () =>
    Appwrite.sdk.functions.listExecutions(id, search, limit, offset, orderType);

  const actions = {
    reload: () => (documents = fetchExecutions()),
    create: async () => {
      const response = await Appwrite.sdk.functions.createExecution(id);
      actions.reload();
      return response;
    },
    get: async execution => {
      return await Appwrite.sdk.functions.getExecution(execution);
    },
  };

  let executions = fetchExecutions();
</script>

{#await executions}
  <slot name="loading" />
{:then current}
  <slot executions={current.executions} {actions} />
{:catch error}
  <slot name="error" {error} />
{/await}
