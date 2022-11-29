<script>
  import Header from './components/ui/Header.svelte';
  import MeetupGrid from './components/meetups/MeetupGrid.svelte';

  const meetups = [
    {
      id: 'm1',
      title: 'Coding Bootcamp',
      subtitle: 'Learn to code in 2 hours',
      description:
        'In this meetup, we will have experts that teach you how to code!',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfNqKeWhAJOJKXmz_nlfrIVVD0a8i5M1QySG1mHaP&s',
      address: '27th Nerd Road, 32523 New York',
      contactEmail: 'code@test.com',
    },
    {
      id: 'm2',
      title: 'Swim Together',
      subtitle: 'Learn to swim in 2 hours',
      description:
        'In this meetup, we will have experts that teach you how to swim!',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfNqKeWhAJOJKXmz_nlfrIVVD0a8i5M1QySG1mHaP&s',
      address: '27th Nerd Road, 32523 New York',
      contactEmail: 'swim@test.com',
    },
  ];
</script>

<Header />

<main>
  <MeetupGrid {meetups} />
</main>

<style>
  main {
    margin-top: 5rem;
  }
</style>
