<script>
  import { createEventDispatcher } from "svelte";
  import { active } from "../stores";
  import Appwrite from "../appwrite";

  const dispatch = createEventDispatcher;
  const actions = {
    name: async name => {
      try {
        const response = await Appwrite.sdk.account.updateName(name);
        dispatch("successName", response);
      } catch (error) {
        dispatch("failureName", error);
        throw error;
      }
    },
    email: async (email, password) => {
      try {
        const response = await Appwrite.sdk.account.updateEmail(
          email,
          password
        );
        dispatch("successEmail", response);
      } catch (error) {
        dispatch("failureEmail", error);
        throw error;
      }
    },
    password: async (password, oldPassword) => {
      try {
        const response = await Appwrite.sdk.account.updatePassword(
          password,
          oldPassword
        );
        dispatch("successPassword", response);
      } catch (error) {
        dispatch("failurePassword", error);
        throw error;
      }
    },
  };
</script>

{#if $active}
  <slot {actions} />
{/if}
