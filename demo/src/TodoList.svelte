<script>
  import { Collection, Document } from "svelte-appwrite";

  let value = "";

  const addTodo = actions => {
    actions.create({ label: value });
    value = "";
  };
</script>

<h2>TodoList</h2>
<Collection id="5f56a3035a01f" let:documents let:actions>
  <form on:submit|preventDefault={addTodo(actions)}>
    <input type="text" placeholder="add todo" bind:value />
  </form>
  <table>
    {#each documents.sort(x => x.done ? 1 : -1) as document}
      <Document {document} on:change={actions.reload} let:actions>
        <tr>
          <td>
            <input
              type="checkbox"
              checked={document.done}
              on:change={actions.update({ done: !document.done })} />
          </td>
          <td>{document.label}</td>
          <td>
            {#if document.done}
              <span class="remove" on:click={actions.remove}>remove</span>
            {/if}
          </td>
        </tr>
      </Document>
    {/each}
  </table>
</Collection>

<style>
  table {
    width: 480px;
    margin: auto;
    text-align: left;
  }
  .remove {
    color: red;
    cursor: pointer;
  }
</style>