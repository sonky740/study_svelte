<script>
  import ContactCard from './ContactCard.svelte';

  let name = 'Max';
  let title = '';
  let image = '';
  let description = '';
  let formState = 'empty';
  let createdContacts = [];

  function addContact() {
    if (
      name.trim() === '' ||
      title.trim() === '' ||
      image.trim() === '' ||
      description.trim() === ''
    ) {
      formState = 'invalid';
      return;
    }

    // svelte는 객체, 배열은 참조 유형이기 때문에 push 같은 메소드로 배열을 변경하면 변경을 감지하지 못한다.
    createdContacts = [
      ...createdContacts,
      {
        id: Math.random(),
        name: name,
        jobTitle: title,
        imageUrl: image,
        desc: description,
      },
    ];
    formState = 'done';
  }

  function deleteFirst() {
    createdContacts = createdContacts.slice(1);
  }

  function deleteLast() {
    createdContacts = createdContacts.slice(0, -1);
  }
</script>

<div id="form">
  <div class="form-control">
    <label for="userName">User Name</label>
    <input type="text" bind:value={name} id="userName" />
  </div>
  <div class="form-control">
    <label for="jobTitle">Job Title</label>
    <input type="text" bind:value={title} id="jobTitle" />
  </div>
  <div class="form-control">
    <label for="image">Image URL</label>
    <input type="text" bind:value={image} id="image" />
  </div>
  <div class="form-control">
    <label for="desc">Description</label>
    <textarea rows="3" bind:value={description} id="desc" />
  </div>
</div>

<button on:click={addContact}>Add Contact Card</button>
<button on:click={deleteFirst}>Delete First</button>
<button on:click={deleteLast}>Delete Last</button>

{#if formState === 'invalid'}
  <p>Invalid input.</p>
{:else}
  <p>Please enter some data and hit the button!</p>
{/if}

{#each createdContacts as contact, index (contact.id)}
  <h2># {index + 1}</h2>
  <ContactCard
    userName={contact.name}
    jobTitle={contact.jobTitle}
    description={contact.desc}
    userImage={contact.imageUrl}
  />
{:else}
  <p>Please start adding some contacts, we found none!</p>
{/each}

<style>
  #form {
    width: 30rem;
    max-width: 100%;
  }
</style>
