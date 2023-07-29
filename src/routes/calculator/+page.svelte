<script>
  let x = 0;
  let y = 0;
  let yDependent = 0;
  let firstName = "jeon"
  let secondName = "woong"

  /** @param {number} value */
  function setY(value) {
    y = value;
  }

  /** @param {number} value */
  function setYDependent(value) {
    yDependent = value
  }

  function changeName() {
    return firstName + " " + secondName
  }

  $: setY(x)
  $: setYDependent(y)
  $: fullName = firstName + " " + secondName
  
</script>

<!-- Total: {total} -->
x: {x}
y: {y}
fullName: {fullName}
yDependent: {yDependent}
<button on:click={() => x++}> Increment X </button>
<button on:click={() => firstName += "dark"}> changeName </button>
<button on:click={() => y++}> Increment Y </button>