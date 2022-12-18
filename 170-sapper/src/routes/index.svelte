<script context="module">
  let error;
  export function preload(page) {
    return this.fetch(
      'https://study-http-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then((data) => {
        const loadedMeetups = [];
        for (const key in data) {
          loadedMeetups.push({
            id: key,
            ...data[key],
          });
        }
        return { fetchedMeetups: loadedMeetups.reverse() };
      })
      .catch((err) => {
        error = err.message;
        isLoading = false;
        this.error(500, 'Could not fetch meetups!');
      });
  }
</script>

<script>
  import { createEventDispatcher, onMount, onDestroy } from 'svelte';
  import meetups from '../store/meetups-store';
  import { scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import MeetupItem from '../components/meetup/MeetupItem.svelte';
  import MeetupFilter from '../components/meetup/MeetupFilter.svelte';
  import EditMeetup from '../components/meetup/EditMeetup.svelte';
  import LoadingSpinner from '../components/ui/LoadingSpinner.svelte';
  import Button from '../components/ui/Button.svelte';

  export let fetchedMeetups;

  let loadedMeeupts = [];
  let editMode;
  let editedId;
  let isLoading;
  let unsubscribe;

  const dispatch = createEventDispatcher();

  let favsOnly = false;

  $: filteredMeetups = favsOnly
    ? loadedMeeupts.filter((m) => m.isFavorite)
    : loadedMeeupts;

  onMount(() => {
    unsubscribe = meetups.subscribe((items) => {
      loadedMeeupts = items;
    });
    meetups.setMeetups(fetchedMeetups);
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });

  function setFilter(event) {
    favsOnly = event.detail === 1;
  }

  function savedMeetup(event) {
    editMode = null;
    editedId = null;
  }

  function cancelEdit() {
    editMode = null;
    editedId = null;
  }

  function startEdit(event) {
    editMode = 'edit';
    editedId = event.detail;
  }

  function startAdd() {
    editMode = 'edit';
  }
</script>

<svelte:head>
  <title>All Meetups</title>
</svelte:head>

{#if editMode === 'edit'}
  <EditMeetup id={editedId} on:save={savedMeetup} on:cancel={cancelEdit} />
{/if}
{#if isLoading}
  <LoadingSpinner />
{:else}
  <section id="meetup-controls">
    <MeetupFilter on:select={setFilter} />
    <Button on:click={startAdd}>New Meetup</Button>
  </section>
  {#if filteredMeetups.length === 0}
    <p id="no-meetups">No meetups found, you can start adding some.</p>
  {/if}
  <section id="meetups">
    {#each filteredMeetups as meetup (meetup.id)}
      <div transition:scale animate:flip={{ duration: 300 }}>
        <MeetupItem
          id={meetup.id}
          title={meetup.title}
          subtitle={meetup.subtitle}
          description={meetup.description}
          imageUrl={meetup.imageUrl}
          email={meetup.contactEmail}
          address={meetup.address}
          isFav={meetup.isFavorite}
          on:edit={startEdit}
        />
      </div>
    {/each}
  </section>
{/if}

<style>
  #meetups {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

  #meetup-controls {
    margin: 1rem;
    display: flex;
    justify-content: space-between;
  }

  #no-meetups {
    margin: 1rem;
  }

  @media (min-width: 768px) {
    #meetups {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
