<script>
  import { onMount } from 'svelte';
  import hobbyStore from './hobby-store';

  let hobbies = [];
  let hobbyInput;
  let isLoading = false;

  onMount(async () => {
    isLoading = true;
    const response = await fetch(
      'https://study-http-default-rtdb.firebaseio.com/hobbies.json'
    );
    isLoading = false;

    if (!response.ok) {
      throw new Error('Failed!');
    }

    const data = await response.json();
    // hobbies = Object.values(data);
    hobbyStore.setHobbies(Object.values(data));
  });

  async function addHobby() {
    // hobbies = [...hobbies, hobbyInput.value];
    hobbyStore.addHobby(hobbyInput.value);

    isLoading = true;
    try {
      const response = await fetch(
        'https://study-http-default-rtdb.firebaseio.com/hobbies.json',
        {
          method: 'POST',
          body: JSON.stringify(hobbyInput.value),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      isLoading = false;

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      // ...
      alert('Saved Data!');
    } catch (err) {
      isLoading = false;
      console.log(err);
    }
  }
</script>

<label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:this={hobbyInput} />
<button on:click={addHobby}>Add Hobby</button>

{#if isLoading}
  <p>Loading...</p>
{:else}
  <ul>
    {#each $hobbyStore as hobby}
      <li>{hobby}</li>
    {/each}
  </ul>
{/if}

<!-- 직접적인 변경이 없는 데이터를 로드할 때 씀 -->
<!-- {#await getHobbies}
  <p>Loading...</p>
{:then hobbyData}
  <ul>
    {#each hobbyData as hobby} 
      <li>{hobby}</li>
    {/each}
  </ul>
{:catch error}
  <p>{error.message}</p>
{/await} -->
