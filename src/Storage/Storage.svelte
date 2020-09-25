<script>
  import Appwrite from "../appwrite";

  import { createEventDispatcher } from "svelte";
  import { currentUser } from "../stores";

  const dispatch = createEventDispatcher();

  const actions = {
    create: async (
      file,
      read = [`user:${$currentUser.$id}`],
      write = [`user:${$currentUser.$id}`]
    ) => {
      try {
        dispatch("upload");
        const response = await Appwrite.sdk.storage.createFile(
          file,
          read,
          write
        );
        dispatch("success", response);
        return response;
      } catch (error) {
        dispatch("failure", error);
      }
    },
  };
</script>

<slot {actions} />
