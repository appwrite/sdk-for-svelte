<script>
  /**
   * @slot {{
   * languages: any;
   * actions: {
   *  reload: () => Promise<object>;
   * }}}
   * @slot {{ error: object }} error
   */
  import { SDK as Appwrite } from "../appwrite";

  const fetchLanguages = () => Appwrite.sdk.locale.getLanguages();

  const actions = {
    reload: () => (languages = fetchLanguages()),
  };

  let languages = fetchLanguages();
</script>

{#await languages}
  <slot name="loading" />
{:then response}
  <slot languages={response} {actions} />
{:catch error}
  <slot name="error" {error} />
{/await}
