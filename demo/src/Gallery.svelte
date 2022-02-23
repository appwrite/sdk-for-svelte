<script>
  import { FileList, File, Storage } from "svelte-appwrite";

  let input;

  const upload = async actions => {
    if (input.length < 1 || !(input[0].name.endsWith(".png") || input[0].name.endsWith(".jpg"))) return;
    actions.create('unique()', input[0]);
  };
</script>

<h2>Gallery</h2>
<FileList let:files let:actions>
  <Storage let:actions on:success={actions.reload}>
    <input type="file" bind:files={input} on:change={upload(actions)} />
  </Storage>
  <hr>
  {#each files as file}
    <File {file} let:actions>
      <a href={actions.download()}>
        <img src={actions.preview('300')} alt={file.name} title={file.name} />
      </a>
    </File>
  {/each}
</FileList>
