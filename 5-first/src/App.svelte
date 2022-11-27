<script>
  export let name;
  export let age;

  $: console.log(name, age);

  function incrementAge() {
    age++;
  }
</script>

<h1>Hello {name}!, my age is {age}</h1>
<button on:click={incrementAge}>Change Age</button>

<style>
  h1 {
    color: purple;
  }
</style>
