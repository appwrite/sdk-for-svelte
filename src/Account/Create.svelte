<script>
  import { createEventDispatcher } from "svelte";
  import { active } from "../stores";
  import Appwrite from "../appwrite";

  const dispatch = createEventDispatcher();
  const actions = {
    create: async (email, password, name) => {
      try {
        const response = await Appwrite.sdk.account.create(
          email,
          password,
          name ? name : ""
        );
        dispatch("success", response);
      } catch (error) {
        dispatch("failure", error);
      }
    },
  };
</script>

{#if $active}
  <slot {actions} />
{/if}
