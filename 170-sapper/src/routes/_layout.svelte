<script>
  import Header from '../components/ui/Header.svelte';
</script>

<Header />

<main>
  <slot />
</main>

<style>
  main {
    margin-top: 5rem;
  }
</style>
