# sdk-for-svelte (Alpha)

Easy to use [Appwrite](https://appwrite.io/) components for Svelte. Install it:

```bash
npm install # or yarn
```

# Status
- [x] Account
- [x] Auth
- [x] Avatars
- [x] Database
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

## Create user

Registers a new account.

```svelte
<script>
  import { Create } from "svelte-appwrite";

  let email = "";
  let password = "";
  let name = "";

  const success = e => {
    //success callback
    // `e` contains the user object
  };

  const failure = e => {
    //failure callback
  }
</script>

<Create let:actions on:success on:failure>
  <input type="text" bind:value={email}>
  <input type="password" bind:value={password}>
  <input type="text" bind:value={name}>
  <button on:click={actions.create(email,password, name)}>Register</button>
</Create>
```

### Directives

**let:actions** `object`

Object with function.

#### Arguments
| Name | Description |
| --- | --- |
| `create(email, password, name)` | Registers a new user. |

### Events

**on:success**

Triggers on successful register.

#### Arguments
| Name | Description |
| --- | --- |
| `response` | Response |

**on:failure**

Triggers on failed register.

#### Arguments
| Name | Description |
| --- | --- |
| `response` | Response |

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

**on:failure**

Triggers on failed login.

#### Arguments
| Name | Description |
| --- | --- |
| `error` | Error object. |

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
| `provider` | OAuth2 provider |
| `success` | Success url |
| `failure` | Failure url |

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
| `collection` | Collection unique ID |
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
| `reload()` | Re-fetch document. |

### Events

**on:change**

Triggers on update or remove login.

# API

## Acount

### Create

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `create(email, password, name)` | Creates a user. |

#### Events

- **on:success** On `create` success.
- **on:failure** On `create` failure.

### Delete

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `delete()` | Deletes currently logged in user. |

#### Events

- **on:success** On `delete` success.
- **on:failure** On `delete` failure.

### Preferences

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reloads preferences. |
| `update(prefs)` | Update preferences. |

#### Events

- **on:success** On init and `reload` success.
- **on:failure** On init and `reload` failure.
- **on:successUpdate** On `update` success.
- **on:failureUpdate** On `update` failure.

### RecoverPassword

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `recover(email, url)` | Recover password. |
| `complete(user, secret, password, passwordAgain)` | Complete password recovery. |

#### Events

- **on:successRecover** On init and `reload` success.
- **on:failureRecover** On init and `reload` failure.
- **on:successComplete** On `update` success.
- **on:failureComplete** On `update` failure.

### Update

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `name(name)` | Update name. |
| `email(email, password)` | Update email. |
| `password(password, oldPassword)` | Update password. |

#### Events

- **on:successName** On `name` success.
- **on:failureName** On `name` failure.
- **on:successEmail** On `email` success.
- **on:failureEmail** On `email` failure.
- **on:successPassword** On `password` success.
- **on:failurePassword** On `password` failure.

### User

#### Slots

- **loading**
- **error**

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `reload()` | Reload. |
| `logout()` | Logout current session. |
| `logoutAll()` | Logout from all session. |
| `logoutFrom(session)` | Logout from specific session. |

**let:user** 
**let:error**

#### Events

- **on:successName** On `name` success.
- **on:failureName** On `name` failure.
- **on:successEmail** On `email` success.
- **on:failureEmail** On `email` failure.
- **on:successPassword** On `password` success.
- **on:failurePassword** On `password` failure.

### Verification

#### Directives

**let:actions**
| Name | Description |
| --- | --- |
| `create(url)` | Reload. |
| `complete(user, secret)` | Logout current session. |

#### Events

- **on:successCreate** On `create` success.
- **on:failureCreate** On `create` failure.
- **on:successComplete** On `complete` success.
- **on:failureComplete** On `complete` failure.

## Auth

### Email

#### Slots

- **loading**
- **success**
- **error**

#### Directives

**let:authorize(email, password)**
**let:user** 
**let:error**

#### Events

- **on:success** On `authorize` success.
- **on:failure** On `authorize` failure.

### OAuth2


#### Directives

**let:authorize()**
