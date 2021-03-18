<script>
  /**
   * @slot {{
   * document: any;
   * actions: {
   *  reload: () => Promise<object>;
   *  update: (data: any) => Promise<object>;
   *  remove: () => Promise<object>;
   * }
   * }}
   */
  import { getContext } from "svelte";
  import { cacheKey } from "../keys";
  import { createEventDispatcher } from "svelte";
  import { documents } from "../stores";
  import { SDK as Appwrite } from "../appwrite";

  const dispatch = createEventDispatcher();
  /**
   * @name Document ID
   * @type {string}
   */
  export let id;

  /**
   * @name Collection ID
   * @type {string}
   */
  export let collection;

  /**
   * @name Document Object
   * @type {any}
   */
  export let document;

  /**
   * @description Enables document caching. Call `actions.reload()` to get fresh document(s)
   * @type {boolean}
   */
  export let cache = getContext(cacheKey) ?? false;

  const fetchDocument = async () => {
    const response = await documents.fetchDocument(collection, id, cache);
    document = response;
    return response;
  };

  if (id && collection && !document) {
    document = fetchDocument();
  } else {
    collection = document.$collection;
    id = document.$id;
  }

  const actions = {
    reload: () => {
      documents.clear();
      document = fetchDocument();
    },
    update: async data => {
      const response = await Appwrite.sdk.database.updateDocument(
        document.$collection,
        document.$id,
        data,
        document.$permissions.read,
        document.$permissions.write
      );
      actions.reload();
      dispatch("change");
      return response;
    },
    remove: async () => {
      const response = await Appwrite.sdk.database.deleteDocument(
        document.$collection,
        document.$id
      );
      actions.reload();
      dispatch("change");
      return response;
    },
  };
</script>

{#if id && collection}
  {#await document}
    <slot name="loading" />
  {:then current}
    <slot document={current} {actions} />
  {:catch error}
    <slot name="error" {error} />
  {/await}
{:else}
  <slot {actions} />
{/if}
