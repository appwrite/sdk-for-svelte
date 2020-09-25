<script>
  import { createEventDispatcher } from "svelte";
  import { active } from "../stores";
  import Appwrite from "../appwrite";

  const dispatch = createEventDispatcher;
  const actions = {
    create: async url => {
      try {
        const response = await Appwrite.sdk.account.createVerification(url);
        dispatch("successCreate", response);
      } catch (error) {
        dispatch("failureCreate", error);
        throw error;
      }
    },
    complete: async (user, secret) => {
      try {
        const response = await Appwrite.sdk.account.updateVerification(
          user,
          secret
        );
        dispatch("successComplete", response);
      } catch (error) {
        dispatch("failureComplete", error);
        throw error;
      }
    },
  };
</script>

{#if $active}
  <slot {actions} />
{/if}
