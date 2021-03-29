<script>
  /**
   * @slot {{
   * authorize: (provider: string, success: string, failure: string) => Promise<object>;
   * }}
   */
  import { SDK as Appwrite } from "../appwrite";

  export let provider;
  export let success;
  export let failure;

  const authorize = () =>
    Appwrite.sdk.account.createOAuth2Session(provider, success, failure);
</script>

<slot {authorize} />
