<script>
  /**
   * @slot {{
   * continents: any;
   * actions: {
   *  reload: () => Promise<object>;
   * }}}
   * @slot {{ error: object }} error
   */
  import { SDK as Appwrite } from "../appwrite";

  const fetchContinents = () => Appwrite.sdk.locale.getContinents();

  const actions = {
    reload: () => (continents = fetchContinents()),
  };

  let continents = fetchContinents();
</script>

{#await continents}
  <slot name="loading" />
{:then response}
  <slot continents={response} {actions} />
{:catch error}
  <slot name="error" {error} />
{/await}
