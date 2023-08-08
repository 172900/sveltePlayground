

<script lang="ts">
  import type { PageData, ActionData } from "./$types"
  export let data: PageData;
  export let form: ActionData

</script>

{#if data.user.name}
  <p>Successfully logged in! Welcome back {data.user.name}</p>
{/if}
<form method="post" action="?/login">
  <label>
    Email
    <input name="email" type="email">
  </label>
  <label>
    Password
    <input name="password" type="password">
  </label>
  <button formaction="?/login">login</button>
</form>

<button formaction="?/logout">logout</button>

