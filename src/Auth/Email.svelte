<script>
  /**
   * @slot {{
   * authorize: (email: string, password: string) => Promise<object>;
   * }}
   * @slot {{ error: object }} error
   */
  import { createEventDispatcher } from "svelte";
  import { SDK as Appwrite }  from "../appwrite";

  const dispatch = createEventDispatcher();
  const authorize = (email, password) => {
    request = async () => {
      try {
        const response = await Appwrite.sdk.account.createSession(
          email,
          password
        );
        dispatch("success", response);
        return response;
      } catch (error) {
        dispatch("failure", error);
        throw error;
      }
    };
  };

  let request;
</script>

<slot {authorize} />

{#if request}
  {#await request()}
    <slot name="loading" />
  {:then user}
    <slot name="success" {user} />
  {:catch error}
    <slot name="error" {error} />
  {/await}
{/if}
