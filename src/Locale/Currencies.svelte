<script>
  import Appwrite from "../appwrite";

  const fetchCurrencies = () => Appwrite.sdk.locale.getCurrencies();

  const actions = {
    reload: () => (currencies = fetchCurrencies()),
  };

  let currencies = fetchCurrencies();
</script>

{#await currencies}
  <slot name="loading" />
{:then response}
  <slot currencies={response} {actions} />
{:catch error}
  <slot name="error" {error} />
{/await}
