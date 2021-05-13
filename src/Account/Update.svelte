<script>
  /**
   * @slot {{
   * actions: {
   *  name: (name: string) => Promise<object>;
   *  email: (email: string, password: string) => Promise<object>;
   *  password: (password: string, oldPassword: string) => Promise<object>;
   * }
   * }}
   */
  import { createEventDispatcher } from "svelte";
  import { active } from "../stores";
  import { SDK as Appwrite } from "../appwrite";

  const dispatch = createEventDispatcher();
  const actions = {
    name: async name => {
      try {
        const response = await Appwrite.sdk.account.updateName(name);
        dispatch("successName", response);
        return response;
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
        return response;
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
        return response;
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
