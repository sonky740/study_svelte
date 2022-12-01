<script>
  import Product from './Product.svelte';
  import Modal from './Modal.svelte';

  let products = [
    {
      id: 'p1',
      title: 'A Book',
      price: 9.99,
    },
    {
      id: 'p2',
      title: 'A Carpet',
      price: 99.99,
    },
    {
      id: 'p3',
      title: 'A Plant',
      price: 9.99,
    },
  ];

  let showModal = false;
  let closeable = false;

  function addToCart(e) {
    console.log('Add to cart', e.detail);
  }

  function deleteProduct(e) {
    console.log(e);
  }
</script>

{#each products as product (product.id)}
  <Product {...product} on:add-to-cart={addToCart} on:delete={deleteProduct} />
{/each}

<button on:click={() => (showModal = true)}>Show Modal</button>

{#if showModal}
  <Modal
    on:cancel={() => (showModal = false)}
    on:close={() => (showModal = false)}
    let:didAgree={closeable}
  >
    <h1 slot="header">A Modal</h1>
    <p>This works</p>
    <button
      slot="footer"
      on:click={() => (showModal = false)}
      disabled={!closeable}>Confirm</button
    >
  </Modal>
{/if}

<style>
</style>
