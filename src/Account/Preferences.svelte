<script>
  /**
   * @slot {{
   * actions: {
   *  reload: () => Promise<void>;
   *  update: (prefs: object) => Promise<object>;
   * }
   * }}
   * @slot {{ error: object }} error
   */
  import { createEventDispatcher } from "svelte";
  import { active } from "../stores";
  import { SDK as Appwrite } from "../appwrite";

  const dispatch = createEventDispatcher();
  const fetchPreferences = async () => {
    try {
      const response = await Appwrite.sdk.account.getPrefs();
      dispatch("success", response);
    } catch (error) {
      dispatch("failure", error);
      throw error;
    }
  };

  const actions = {
    reload: () => (request = fetchPreferences()),
    update: async prefs => {
      try {
        const response = await Appwrite.sdk.account.updatePrefs(prefs);
        dispatch("successUpdate", response);
        return response;
      } catch (error) {
        dispatch("failureUpdate", error);
        throw error;
      }
    },
  };

  let request = fetchPreferences();
</script>

{#if $active}
  {#await request}
    <slot name="loading" />
  {:then prefs}
    <slot {prefs} {actions} />
  {:catch error}
    <slot name="error" {error} />
  {/await}
{/if}
