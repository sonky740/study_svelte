<script>
  import meetups from './store/meetups';
  import Header from './UI/Header.svelte';
  import MeetupGrid from './Meetups/MeetupGrid.svelte';
  import Button from './UI/Button.svelte';
  import EditMeetup from './Meetups/EditMeetup.svelte';
  import MeetupDetail from './Meetups/MeetupDetail.svelte';

  // let meetups = ;

  let editMode;
  let page = 'overview';
  let pageData = {};

  function addMeetup(event) {
    editMode = null;
  }

  function cancelEdit() {
    editMode = null;
  }

  function showDetails(e) {
    page = 'details';
    pageData.id = e.detail;
  }

  function closeDetails() {
    page = 'overview';
    pageData = {};
  }
</script>

<Header />

<main>
  {#if page === 'overview'}
    <div class="meetup-controls">
      <Button on:click={() => (editMode = 'add')}>New Meetup</Button>
    </div>
    {#if editMode === 'add'}
      <EditMeetup on:save={addMeetup} on:cancel={cancelEdit} />
    {/if}
    <MeetupGrid meetups={$meetups} on:showdetails={showDetails} />
  {:else if page === 'details'}
    <MeetupDetail id={pageData.id} on:close={closeDetails} />
  {/if}
</main>

<style>
  main {
    margin-top: 5rem;
  }

  .meetup-controls {
    margin: 1rem;
  }
</style>
