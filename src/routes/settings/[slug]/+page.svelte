
<script>
  export let data
</script>

<h1>페이지는 {data.params}입니다</h1>
{data.parent}

<form method="post" action="/login">
  <label>
    Email
    <input name="email" type="email">
  </label>
  <label>
    Password
    <input name="password" type="password">
  </label>
  <button>Log in</button>
</form>