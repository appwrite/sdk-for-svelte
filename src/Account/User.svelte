<script>
  /**
   * @typedef {{
   * $id: string,
   * email: string,
   * emailVerification: boolean,
   * name: string,
   * registration: number,
   * status: number,
   * prefs: object
   * }} AppwriteUser
   */

  /**
   * @slot {{
   * user: AppwriteUser;
   * actions: {
   *  reload: () => void;
   *  logout: () => Promise<object>;
   *  logoutFrom: (session: string) => Promise<object>;
   *  logoutAll: () => Promise<object>;
   * }
   * }}
   * @slot {{ error: object }} error
   */
  import { createEventDispatcher } from "svelte";
  import { active, currentUser } from "../stores";
  import { SDK as Appwrite } from "../appwrite";

  const dispatch = createEventDispatcher();

  const fetchUser = async () => {
    try {
      await currentUser.reload();
      dispatch("success", $currentUser);
      return $currentUser;
    } catch (error) {
      dispatch("failure", error);
      throw error;
    }
  };

  const actions = {
    reload: () => (request = fetchUser()),
    logout: async () => {
      try {
        const response = await currentUser.logout();
        actions.reload();
        dispatch("successLogout", response);
      } catch (error) {
        dispatch("failureLogout", error);
        throw error;
      }
    },
    logoutFrom: async session => {
      try {
        const response = await Appwrite.sdk.account.deleteSession(session);
        actions.reload();
        dispatch("successLogoutFrom", response);
      } catch (error) {
        dispatch("failureLogoutFrom", error);
        throw error;
      }
    },
    logoutAll: async () => {
      try {
        const response = await Appwrite.sdk.account.deleteSessions();
        actions.reload();
        dispatch("successLogoutAll", response);
      } catch (error) {
        dispatch("failureLogoutAll", error);
        throw error;
      }
    },
  };

  let request = fetchUser();
</script>

{#if $active}
  {#if $currentUser}
    <slot user={$currentUser} {actions} />
  {:else}
    {#await request}
      <slot name="loading" />
    {:catch error}
      <slot name="error" {error} />
    {/await}
  {/if}
{/if}
