<script>
  import { onDestroy } from 'svelte';
  import { timer } from '../store/timer';
  import cartItems from '../store/cart';
  import CartItem from './CartItem.svelte';

  const unsubscribe = timer.subscribe((count) => {
    console.log('Cart: ', count);
  });

  // $변수를 쓰면 아래 함수를 알아서 호출해줌.

  // let items;
  // const unsubscribe = cartItems.subscribe((its) => {
  //   items = its;
  // }); // 데이터가 바뀔 때 실행하는 함수

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  }); // 컴포넌트가 파괴될 때 실행하는 함수
</script>

<section>
  <h1>Cart</h1>
  <ul>
    {#each $cartItems as item (item.id)}
      <CartItem id={item.id} title={item.title} price={item.price} />
    {:else}
      <p>No items in cart yet!</p>
    {/each}
  </ul>
</section>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
    border-bottom: 2px solid #ccc;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
