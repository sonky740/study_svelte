<script>
  import Product from './Product.svelte';
  import CartItem from './CartItem.svelte';
  import FamilyNode from './FamilyNode.svelte';

  let y;
  let currentTitle = '';

  $: console.log(y);

  let familyStructure = [
    {
      isParent: true,
      name: 'Chris',
      children: [
        {
          isParent: true,
          name: 'Moe',
          children: [{ isParent: false, name: 'Julie' }],
        },
      ],
    },
  ];

  let renderedComponent = { cmp: Product, title: 'Test Product', id: 'p1' };

  function toggle() {
    if (renderedComponent.cmp === Product) {
      renderedComponent = { cmp: CartItem, title: 'Another Product', id: 'p2' };
    } else {
      renderedComponent = { cmp: Product, title: 'Test Product', id: 'p1' };
    }
  }

  function switchTitle() {
    currentTitle = 'A New Title';
  }
</script>

<svelte:window bind:scrollY={y} />
<svelte:body on:mouseenter />

<svelte:head>
  <title>{currentTitle}</title>
</svelte:head>

<button on:click={switchTitle}>Switch title</button>

<div>
  <button on:click={toggle}>Toggle Display</button>

  <svelte:component
    this={renderedComponent.cmp}
    title={renderedComponent.title}
    id={renderedComponent.id}
  />

  {#each familyStructure as familyMember}
    <FamilyNode member={familyMember} />
  {/each}
</div>

<style>
  div {
    height: 3000px;
  }
</style>
