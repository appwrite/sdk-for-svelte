<script>
  /**
   * @slot {{
   * actions: {
   *  create: (email: string, password: string, name?: string) => Promise<object>;
   * }
   * }}
   */
  import { createEventDispatcher } from "svelte";
  import { active } from "../stores";
  import { SDK as Appwrite } from "../appwrite";

  const dispatch = createEventDispatcher();
  const actions = {
    create: async (email, password, name = "") => {
      try {
        const response = await Appwrite.sdk.account.create(
          email,
          password,
          name
        );
        dispatch("success", response);
        return response;
      } catch (error) {
        dispatch("failure", error);
      }
    },
  };
</script>

{#if $active}
  <slot {actions} />
{/if}
