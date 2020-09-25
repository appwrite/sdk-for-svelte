<script>
  import { AuthEmail } from "svelte-appwrite";

  let email = "";
  let password = "";
</script>

<AuthEmail let:authorize let:error on:success>
  <input type="text" bind:value={email}>
  <input type="text" bind:value={password}>
  <button on:click={authorize(email,password)}>Login</button>
  <div slot="error">
    {error}
  </div>
</AuthEmail>