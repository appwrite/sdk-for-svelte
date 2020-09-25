<script>
  import { createEventDispatcher } from "svelte";
  import Appwrite from "../appwrite";

  const dispatch = createEventDispatcher();
  export let document;

  export const actions = {
    update: async data => {
      await Appwrite.sdk.database.updateDocument(
        document.$collection,
        document.$id,
        data,
        document.$permissions.read,
        document.$permissions.write
      );
      dispatch("change");
    },
    remove: async () => {
      await Appwrite.sdk.database.deleteDocument(
        document.$collection,
        document.$id
      );
      dispatch("change");
    },
  };
</script>

<slot {actions} />
