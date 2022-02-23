<script>
  import {
    Appwrite,
    User,
    AuthOAuth2,
    Locale,
    Countries,
    Flag,
  } from "svelte-appwrite";
  import Gallery from "./Gallery.svelte";
  import Login from "./Login.svelte";
  import TodoList from "./TodoList.svelte";
  
  const config = {
    endpoint: "http://localhost/v1",
    project: "5ffc6c043586d",
    locale: "de",
  };
</script>

<main>
  <Appwrite {...config}>
    <User let:user let:actions>
      <h1>Hello {user.name}!</h1>
      <div>{user.email}</div>
      <Locale let:code>
        {#if code.countryCode != "--"}
          <Flag code={code.countryCode} height="16" width="24" let:src>
            You are from <img src={src.toLowerCase()} alt={code.country} title={code.country} />
          </Flag>
        {/if}
      </Locale>
      <br />
      <Countries let:countries>
        The world has {Object.keys(countries.countries).length} countries!
      </Countries>
      <br />
      <Countries let:countries eu={true}>
        The european union has {Object.keys(countries.countries).length} members!
      </Countries>
      <br />
      <button on:click={actions.logout(actions.reload)}>Logout</button>
      <TodoList />
      <Gallery />
      <div slot="error">
        <AuthOAuth2
          provider="discord"
          success="http://localhost:8080?success"
          failure="http://localhost:8080?failure"
          let:authorize>
          <button on:click={authorize}>Login Discord</button>
        </AuthOAuth2>
        <AuthOAuth2
          provider="twitch"
          success="http://localhost:8080?success"
          failure="http://localhost:8080?failure"
          let:authorize>
          <button on:click={authorize}>Login Twitch</button>
        </AuthOAuth2>
        <AuthOAuth2
          provider="google"
          success="http://localhost:8080?success"
          failure="http://localhost:8080?failure"
          let:authorize>
          <button on:click={authorize}>Login Google</button>
        </AuthOAuth2>
        <hr />
        <Login on:success={actions.reload} />
      </div>
    </User>
  </Appwrite>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 640px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
