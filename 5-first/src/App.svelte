<script>
  import ContactCard from './ContactCard.svelte';

  let name = 'Max';
  let title = 'Job';
  let image =
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
  let description = 'A short <strong>description</strong>';
  let age = 30;

  $: uppercaseName = name.toUpperCase();

  $: console.log(name);

  $: if (name === 'Manuel') {
    console.log('It runs!');
    age = 31;
  }

  function incrementAge() {
    age++;
  }

  function changeName() {
    name = 'Manuel';
  }

  function nameInput(e) {
    name = e.target.value;
  }
</script>

<h1>Hello {uppercaseName}!, my age is {age}</h1>
<button on:click={incrementAge}>Change Age</button>
<button on:click={changeName}>Change Name</button>
<!-- <input type="text" value={name} on:input={nameInput} /> -->
<input type="text" bind:value={name} />
<input type="text" bind:value={title} />
<input type="text" bind:value={image} />
<textarea rows="3" bind:value={description} />

<ContactCard userName={name} jobTitle={title} userImage={image} {description} />

<style>
  h1 {
    color: purple;
  }
</style>
