<script>
  import Button from '../ui/Button.svelte';
  export let meetup;
</script>

<article>
  <header>
    <h1>{meetup.title}</h1>
    <h2>{meetup.subtitle}</h2>
    <p>{meetup.address}</p>
  </header>
  <div class="image">
    <img src={meetup.imageUrl} alt={meetup.title} />
  </div>
  <div class="content">
    <p>{meetup.description}</p>
  </div>
  <footer>
    <Button href="mailto:{meetup.contactEmail}" caption="Contact" />
    <Button mode="outline" caption="Show Details" />
    <Button caption="Favorite" />
  </footer>
</article>

<style>
  article {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;
  }

  header,
  .content,
  footer {
    padding: 1rem;
  }

  .image {
    width: 100%;
    height: 14rem;
  }

  .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h1 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: 'Roboto Slab', sans-serif;
  }

  h1.is-favorite {
    background: #01a129;
    color: white;
    padding: 0 0.5rem;
    border-radius: 5px;
  }

  h2 {
    font-size: 1rem;
    color: #808080;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1.25rem;
    margin: 0;
  }

  div {
    text-align: right;
  }

  .content {
    height: 4rem;
  }
</style>
