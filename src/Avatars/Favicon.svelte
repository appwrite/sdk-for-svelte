<script>
  import { SDK as Appwrite } from "../appwrite";

  export let url;

  let src = Appwrite.sdk.avatars.getFavicon(url);
</script>

<slot {src} />
