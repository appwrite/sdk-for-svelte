<script>
  import { SDK as Appwrite } from "../appwrite";

  export let code;
  export let width = 100;
  export let height = 100;
  export let quality = 100;

  let src = Appwrite.sdk.avatars.getBrowser(code, width, height, quality);
</script>

<slot {src} />
