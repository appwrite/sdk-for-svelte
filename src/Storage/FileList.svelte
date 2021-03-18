<script>
  /**
   * @slot {{
   * files: any[];
   * actions: {
   *   reload: () => Promise<object>;
   * }}}
   * @slot {{ error: object }} error
   */
  import { SDK as Appwrite } from "../appwrite";

  export let search = "";
  export let limit = 25;
  export let offset = 0;
  export let orderType = "ASC";
  const actions = {
    reload: () => (files = fetchFiles()),
  };
  const fetchFiles = () =>
    Appwrite.sdk.storage.listFiles(search, limit, offset, orderType);

  let files = fetchFiles();
</script>

{#await files}
  <slot name="loading" />
{:then response}
  <slot files={response?.files ?? []} {actions} />
{:catch error}
  <slot name="error" {error} />
{/await}
