<script>
  /**
   * @slot {{
   * documents: any;
   * actions: {
   *  reload: () => Promise<object>;
   *  create: (data: any, read?: string[], write?: string[]) => Promise<object>;
   * }
   * }}
   * @slot {{ error: object }} error
   */
  import Appwrite from "../appwrite";
  import { currentUser } from "../stores";

  export let id;
  export let filters = [];
  export let offset = 0;
  export let limit = 25;
  export let orderField = "";
  export let orderType = "";
  export let orderCast = "string";
  export let search = "";

  const fetchDocuments = () =>
    Appwrite.sdk.database.listDocuments(
      id,
      filters,
      offset,
      limit,
      orderField,
      orderType,
      orderCast,
      search,
    );

  const actions = {
    reload: () => (documents = fetchDocuments()),
    create: async (
      data,
      read = [`user:${$currentUser.$id}`],
      write = [`user:${$currentUser.$id}`]
    ) => {
      const response = await Appwrite.sdk.database.createDocument(id, data, read, write);
      actions.reload();
      return response;
    },
  };

  let documents = fetchDocuments();
</script>

{#await documents}
  <slot name="loading" />
{:then current}
  <slot documents={current.documents} {actions} />
{:catch error}
  <slot name="error" {error} />
{/await}
