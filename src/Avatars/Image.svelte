<script>
  import { SDK as Appwrite } from "../appwrite";

  export let url;
  export let width = "";
  export let height = "";

  let src = Appwrite.sdk.avatars.getImage(url, width, height);
</script>

<slot {src} />
