<script>
  import Header from './components/ui/Header.svelte';
  import MeetupGrid from './components/meetups/MeetupGrid.svelte';
  import TextInput from './components/ui/TextInput.svelte';
  import Button from './components/ui/Button.svelte';

  let title = '';
  let subtitle = '';
  let address = '';
  let email = '';
  let description = '';
  let imageUrl = '';

  let meetups = [
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

  function addMeetup() {
    const newMeetup = {
      id: Math.random().toString(),
      title,
      subtitle,
      description,
      imageUrl,
      address,
      contactEmail: email,
    };

    // meetups.push(newMeetup); // DOES NOT WORK!
    meetups = [newMeetup, ...meetups];
    console.log(meetups);
  }
</script>

<Header />

<main>
  <form on:submit|preventDefault={addMeetup}>
    <TextInput
      label="Title"
      id="title"
      value={title}
      on:input={(e) => (title = e.target.value)}
    />
    <TextInput
      label="SubTitle"
      id="subtitle"
      value={subtitle}
      on:input={(e) => (subtitle = e.target.value)}
    />
    <TextInput
      label="address"
      id="address"
      value={address}
      on:input={(e) => (address = e.target.value)}
    />
    <TextInput
      label="imageURL"
      id="imageUrl"
      value={imageUrl}
      on:input={(e) => (imageUrl = e.target.value)}
    />
    <TextInput
      label="E-Mail"
      type="email"
      id="email"
      value={email}
      on:input={(e) => (email = e.target.value)}
    />
    <TextInput
      label="Description"
      id="description"
      value={description}
      on:input={(e) => (description = e.target.value)}
      controlType="textarea"
    />
    <Button type="submit" caption="Save" />
  </form>
  <MeetupGrid {meetups} />
</main>

<style>
  main {
    margin-top: 5rem;
  }
</style>
