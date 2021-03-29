<script>
  /**
   * @slot {{
   * file: any;
   * actions: {
   *  download: () => string;
   *  view: (as?: string) => string;
   *  preview: (width?: string, height?: string, quality?: string, background?: string, output?: string) => string;
   *  update: (read?: any, write?: any) => Promise<object>;
   *  delete: () => Promise<object>;
   * }}}
   * @slot {{ error: object }} error
   */
  import { SDK as Appwrite } from "../appwrite";

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
