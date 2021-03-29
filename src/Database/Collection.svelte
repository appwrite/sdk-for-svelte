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
  export let orderField = "";
  export let orderType = "";
  export let orderCast = "string";
  export let search = "";

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
      orderField,
      orderType,
      orderCast,
      search,
    });
  };

  const actions = {
    reload: () => {
      documents.clear();
      getDocuments = fetchDocuments();
    },
    create: async (
      data,
      read = [`user:${$currentUser.$id}`],
      write = [`user:${$currentUser.$id}`],
      parentDocument = "",
      parentProperty = "",
      parentPropertyType = "assign"
    ) => {
      const response = await Appwrite.sdk.database.createDocument(
        id,
        data,
        read,
        write,
        parentDocument,
        parentProperty,
        parentPropertyType
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
