# WIP: sdk-for-svelte

Easy to use [Appwrite](https://appwrite.io/) components for Svelte. Install it:

```bash
npm install # or yarn
```

# Status
- [x] Account
- [x] Auth
- [x] Avatars
- [x] Database
- [ ] Database (Parent Documents)
- [x] Locale
- [x] Storage
- [ ] Teams


# Usage

## Initialize

Must be initialised and wrap every `svelte-appwrite` component.

```svelte
<script>
  import { Appwrite } from "svelte-appwrite";

  const config = {
    endpoint: "http://localhost/v1",
    project: "5f4938898667e",
    locale: "de",
  };
</script>

<Appwrite {...config}>
  ...
</Appwrite>
```

### Properties
| Name | Description |
| --- | --- |
| `endpoint` | Your Appwrite endpoint |
| `project` | Your project ID |
| `locale` | _Optional_ The users locale |

## AuthEmail

Login via email and password.

```svelte
<script>
  import { AuthEmail } from "svelte-appwrite";

  let email = "";
  let password = "";

  const success = e => {
    //success callback
    // `e` contains the user object
  };

  const failure = e => {
    //failure callback
  }
</script>

<AuthEmail let:authorize on:success on:failure>
  <input type="text" bind:value={email}>
  <input type="text" bind:value={password}>
  <button on:click={authorize(email,password)}>Login</button>
</AuthEmail>
```

### Directives

**let:authorize** `function`

Initiates login.

#### Arguments
| Name | Description |
| --- | --- |
| `email` | E-Mail |
| `password` | Password |

### Events

**on:success**

Triggers on successful login.

#### Arguments
| Name | Description |
| --- | --- |
| `email` | E-Mail |
| `password` | Password |

**on:failure**

Triggers on failed login.

#### Arguments
| Name | Description |
| --- | --- |
| `email` | E-Mail |
| `password` | Password |

## Login OAuth2

Login via an OAuth2 provider.

```svelte
<script>
  import { AuthOAuth2 } from "svelte-appwrite";
</script>

<AuthOAuth2
  provider="google"
  success="http://localhost:5000?success"
  failure="http://localhost:5000?failure"
  let:authorize>
  <button on:click={authorize}>Login Google</button>
</AuthOAuth2>
```

### Properties
| Name | Description |
| --- | --- |
| `provider` | Your Appwrite endpoint |
| `success` | Your project ID |
| `failure` | _Optional_ The users locale |

### Directives

**let:authorize** `function`

Initiates OAuth2 login.

## Get user

Requests current user to check if logged in.

```svelte
<script>
  import { User } from "svelte-appwrite";
</script>

<User let:user>
  <h1>Hello {user.name}!</h1>
  <div>{user.email}</div>

  <div slot="error">
    You are not logged in!
  </div>
</User>
```

### Directives

**let:user** `object`

Get currently logged in user data.

## Get Collection

Get a list of all the documents from a collection.

```svelte
<script>
  import { Collection } from "svelte-appwrite";
</script>

<Collection collection="5f56a3035a01f" let:documents>
  You have {documents.length} documents.
</Collection>
```

### Properties
| Name | Description |
| --- | --- |
| `collection` | Collection unique ID. |
| _additional_ | same as [here](https://appwrite.io/docs/client/database#listDocuments) |

### Directives

**let:documents** `array`

Array of documents.

**let:actions** `object`

Object with function.

#### Arguments
| Name | Description |
| --- | --- |
| `reload()` | Re-fetch collection. |
| `create(data, read, write)` | Create a new Document in the collection. `read`/`write` is optional and current user by default. |

## Get Document

Get a document. If you pass the `document` property with data from <Collection />, there wont be any data requested.

```svelte
<script>
  import { Document } from "svelte-appwrite";
</script>

<Document id="5f56a3asda01f" let:document>
  Title: {document.title}
  Text: {document.text}
</Document>
```
### Properties
| Name | Description |
| --- | --- |
| `id` | Document unique ID |
| or |
| `document` | Document passed from `<Collection />` |

### Directives

**let:document** `object`

A JSON object with the document data.

**let:actions** `object`

Object with function.

#### Arguments
| Name | Description |
| --- | --- |
| `update(data)` | Update the document. |
| `remove()` | Deletes the document. |

### Events

**on:change**

Triggers on update or remove login.

# Example

## App.svelte
```svelte
<script>
  import { Appwrite, User, OAuth2 } from "svelte-appwrite";
  import TodoList from "./TodoList.svelte";

  const config = {
    endpoint: "http://localhost/v1",
    project: "5f4938898667e",
    locale: "de",
  };
</script>

<main>
  <Appwrite {...config}>
    <User let:user>
      <h1>Hello {user.name}!</h1>
      <div>{user.email}</div>
      <TodoList />
      <div slot="error">
        <OAuth2
          provider="discord"
          success="http://localhost:5000?success"
          failure="http://localhost:5000?failure"
          let:authorize>
          <button on:click={authorize}>Login Discord</button>
        </OAuth2>
      </div>
    </User>
  </Appwrite>
</main>
```
## TodoList.svelte

```svelte
<script>
  import { Collection, Document } from "svelte-appwrite";

  let value = "";
</script>

<Collection id="5f56a3035a01f" let:documents let:actions>
  <form on:submit|preventDefault={actions.create({ label: value })}>
    <input type="text" bind:value />
  </form>
  <ul>
    {#each documents as document}
      <Document document={document} on:change={actions.reload} let:actions>
        <li>
          <input
            type="checkbox"
            checked={document.done}
            on:change={actions.update({ done: !document.done })} />
          {document.label}
          {#if document.done}
            <button on:click={actions.remove}>remove</button>
          {/if}
        </li>
      </Document>
    {/each}
  </ul>
</Collection>

```
