<script>
  import Appwrite from "../appwrite";
  export let file;

  const actions = {
    download: () => Appwrite.sdk.storage.getFileDownload(file.$id),
    view: (as = "") => Appwrite.sdk.storage.getFileView(file.$id, as),
    preview: (
      width = "",
      height = "",
      quality = "",
      background = "",
      output = ""
    ) =>
      Appwrite.sdk.storage.getFilePreview(
        file.$id,
        width,
        height,
        quality,
        background,
        output
      ),
    update: async (
      read = file.$permissions.read,
      write = file.$permissions.write
    ) => await Appwrite.sdk.storage.updateFile(file.$id, read, write),
    delete: async () => await Appwrite.sdk.storage.deleteFile(file.$id),
  };
</script>

<slot {actions} />
