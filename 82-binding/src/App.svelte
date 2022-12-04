<script>
  import CustomInput from './CustomInput.svelte';
  import Toggle from './Toggle.svelte';
  import { isValidEmail } from './validation';

  let val = '';
  let price = 0;
  let selectedOption = 1;
  let agreed = false;
  let selectedColor = 'Red';
  let singleFavColor = 'red';
  let usernameInput = null;
  let someDiv = null;
  let customInput = null;
  let enteredEmail = '';
  let formIsvalid = false;

  $: if (isValidEmail(enteredEmail)) {
    formIsvalid = true;
  } else {
    formIsvalid = false;
  }

  $: console.log(price);
  $: console.log(agreed);
  $: console.log(selectedColor);
  $: console.log(singleFavColor);
  $: console.log(customInput);

  function setValue(e) {
    val = e.target.value;
  }

  function saveData() {
    // console.log(document.querySelector('#username').value);
    console.log(usernameInput.value);
    console.dir(someDiv);

    customInput.empty();
  }
</script>

<h1>Bindings & Forms</h1>
<!-- <input type="text" value={val} on:input{setValue} /> -->
<!-- <input type="text" bind:value={val} /> -->
<CustomInput bind:val bind:this={customInput} />

<!-- 양방향 바인딩을 남용하지 말 것. -->
<!-- 버그가 발생하기 쉽고, 어떻게 동작하는지 헷갈릴 수 있음. -->
<Toggle bind:chosenOption={selectedOption} />

<input type="number" bind:value={price} />
<!-- 자동으로 숫자로 변경해줌. -->

<!-- checkbox -->
<label>
  <input type="checkbox" bind:checked={agreed} />
  Agree to terms?
</label>

<!-- radio -->
<h1>Favortie Color?</h1>
<label>
  <input
    type="radio"
    name="selectedColor"
    value="Red"
    bind:group={selectedColor}
  />
  Red
</label>
<label>
  <input
    type="radio"
    name="selectedColor"
    value="Green"
    bind:group={selectedColor}
  />
  Green
</label>
<label>
  <input
    type="radio"
    name="selectedColor"
    value="Blue"
    bind:group={selectedColor}
  />
  Blue
</label>

<hr />

<!-- select -->
<select bind:value={singleFavColor}>
  <option value="green">green</option>
  <option value="red">red</option>
  <option value="blue">blue</option>
</select>

<hr />

<!-- <input type="text" id="username" /> -->
<input type="text" bind:this={usernameInput} />
<button on:click={saveData}>Save</button>

<div bind:this={someDiv} />

<hr />

<!-- 유효성 -->
<form on:submit|preventDefault>
  <input
    type="email"
    bind:value={enteredEmail}
    class={!isValidEmail(enteredEmail) && 'invalid'}
  />
  <button type="submit" disabled={!formIsvalid}>Submit</button>
</form>

<style>
  .invalid {
    border: 1px solid #ff0000;
  }
</style>