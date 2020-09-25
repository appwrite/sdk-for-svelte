<script>
  import Appwrite from "../appwrite";

  export let provider;
  export let success;
  export let failure;

  const authorize = () =>
    Appwrite.sdk.account.createOAuth2Session(provider, success, failure);
</script>

<slot {authorize} />
