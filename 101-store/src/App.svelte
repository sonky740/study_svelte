<script>
  import { timer } from './store/timer';
  import Cart from './Cart/Cart.svelte';
  import Products from './Products/Products.svelte';
  import Button from './UI/Button.svelte';

  let showCart = true;

  // timer.subscribe((count) => {
  //   console.log('App: ', count);
  // });
</script>

<Button on:click={() => (showCart = !showCart)}>Toggle Cart</Button>

{#if showCart}
  <Cart />
{/if}
<Products />

<p>Count: {$timer}</p>
