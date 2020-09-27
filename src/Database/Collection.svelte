<script>
  import Appwrite from "../appwrite";
  import { currentUser } from "../stores";

  export let id;
  export let filters = [];
  export let offset = 0;
  export let limit = 50;
  export let orderField = "";
  export let orderType = "";
  export let orderCast = "string";
  export let search = "";
  export let first = 0;
  export let last = 0;

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
      first,
      last
    );

  const actions = {
    reload: () => (documents = fetchDocuments()),
    create: async (
      data,
      read = [`user:${$currentUser.$id}`],
      write = [`user:${$currentUser.$id}`]
    ) => {
      await Appwrite.sdk.database.createDocument(id, data, read, write);
      actions.reload();
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
