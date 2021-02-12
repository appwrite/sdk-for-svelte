<script>
  /**
   * @slot {{
   * documents: any;
   * actions: {
   *  update: (data: any) => Promise<object>;
   *  remove: () => Promise<object>;
   * }
   * }}
   */
  import { createEventDispatcher } from "svelte";
  import Appwrite from "../appwrite";

  const dispatch = createEventDispatcher();
  export let document;

  const actions = {
    update: async data => {
      const response = await Appwrite.sdk.database.updateDocument(
        document.$collection,
        document.$id,
        data,
        document.$permissions.read,
        document.$permissions.write
      );
      dispatch("change");
      return response;
    },
    remove: async () => {
      const response = await Appwrite.sdk.database.deleteDocument(
        document.$collection,
        document.$id
      );
      dispatch("change");
      return response;
    },
  };
</script>

<slot {actions} />
