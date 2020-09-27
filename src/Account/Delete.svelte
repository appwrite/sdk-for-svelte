<script>
  import { createEventDispatcher } from "svelte";
  import { active } from "../stores";
  import Appwrite from "../appwrite";

  const dispatch = createEventDispatcher;
  const actions = {
    delete: async () => {
      try {
        const response = await Appwrite.sdk.account.delete();
        dispatch("success", response);
      } catch (error) {
        dispatch("failure", error);
        throw error;
      }
    },
  };
</script>

{#if $active}
  <slot {actions} />
{/if}
