<script>
  /**
   * @slot {{
   * countries: any;
   * actions: {
   *  reload: () => Promise<object>;
   * }}}
   * @slot {{ error: object }} error
   */
  import { SDK as Appwrite } from "../appwrite";

  export let eu = false;

  const fetchCountries = eu
    ? () => Appwrite.sdk.locale.getCountriesEU()
    : () => Appwrite.sdk.locale.getCountries();

  const actions = {
    reload: () => (countries = fetchCountries()),
  };

  let countries = fetchCountries();
</script>

{#await countries}
  <slot name="loading" />
{:then response}
  <slot countries={response} {actions} />
{:catch error}
  <slot name="error" {error} />
{/await}
