<script>
  /**
   * @slot {{
   * documents: any[];
   * actions: {
   *  reload: () => Promise<object>;
   *  create: (data: any, read?: string[], write?: string[]) => Promise<object>;
   * }
   * }}
   * @slot {{ error: object }} error
   */
  import { setContext } from "svelte";
  import { cacheKey } from "../keys";
  import { SDK as Appwrite } from "../appwrite";
  import { currentUser, documents } from "../stores";

  /**
   * @name Collection ID
   * @type {string}
   */
  export let id;

  /** @type {string[]} */
  export let filters = [];

  export let offset = 0;
  export let limit = 25;
  export let cursor = "";
  export let cursorDirection = "";
  export let orderAttributes = [];
  export let orderTypes = [];

  /**
   * @description Enables document caching. Call `actions.reload()` to get fresh document(s)
   * @type {boolean}
   */
  export let cache = false;
  setContext(cacheKey, cache);

  const fetchDocuments = async () => {
    return await documents.fetchDocuments(id, cache, {
      filters,
      limit,
      offset,
      cursor,
      cursorDirection,
      orderAttributes,
      orderTypes,
    });
  };

  const actions = {
    reload: () => {
      documents.clear();
      getDocuments = fetchDocuments();
    },
    create: async (
      documentId,
      data,
      read = [`user:${$currentUser.$id}`],
      write = [`user:${$currentUser.$id}`],
    ) => {
      const response = await Appwrite.sdk.database.createDocument(
        id,
        documentId,
        data,
        read,
        write
      );
      actions.reload();
      return response;
    },
  };

  let getDocuments = fetchDocuments();
</script>

{#await getDocuments}
  <slot name="loading" />
{:then current}
  <slot documents={current?.documents ?? []} {actions} />
{:catch error}
  <slot name="error" {error} />
{/await}
