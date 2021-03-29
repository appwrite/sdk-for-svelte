<script>
  /**
   * @slot {{
   * code: any;
   * actions: {
   *  reload: () => Promise<object>;
   * }}}
   * @slot {{ error: object }} error
   */
  import { SDK as Appwrite } from "../appwrite";

  const fetchUserLocale = () => Appwrite.sdk.locale.get();

  const actions = {
    reload: () => (locale = fetchUserLocale()),
  };

  let locale = fetchUserLocale();
</script>

{#await locale}
  <slot name="loading" />
{:then response}
  <slot code={response} {actions} />
{:catch error}
  <slot name="error" {error} />
{/await}
