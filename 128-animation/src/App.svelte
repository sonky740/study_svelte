<script>
  import { tweened } from 'svelte/motion';
  import { cubicIn } from 'svelte/easing';
  import { fade, fly, slide, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  // import Spring from './Spring.svelte';

  const progress = tweened(0, {
    delay: 0,
    duration: 700,
    easing: cubicIn,
  });

  setTimeout(() => {
    progress.set(0.5);
  }, 1500);

  let boxInput = '';
  let showParagraph = false;

  let boxes = [];

  function addBox() {
    const box = {
      id: Math.random(),
      content: boxInput,
    };
    boxes = [box, ...boxes];
  }

  function discard(id) {
    boxes = boxes.filter((box) => box.id !== id);
  }
</script>

<!-- <progress value={$progress} /> -->
<!-- <Spring  /> -->

<button on:click={() => (showParagraph = !showParagraph)}>Toggle</button>

{#if showParagraph}
  <p in:fade out:fly={{ x: 300 }}>Can you see me?</p>
{/if}

<hr />

<input type="text" bind:value={boxInput} />
<button on:click={addBox}>add box</button>

{#if showParagraph}
  {#each boxes as box (box.id)}
    <!-- local: 단일 항목을 추가할 때만 적용 -->
    <button
      class="box"
      transition:fly|local={{ easing: cubicIn, x: 200, y: 300 }}
      on:click={discard(box.id)}
      on:introstart={() => console.log('introstart')}
      on:introend={() => console.log('introend')}
      on:outrostart={() => console.log('outrostart')}
      on:outroend={() => console.log('outroend')}
      animate:flip={{ duration: 300 }}
    >
      {box.content}
    </button>
  {/each}
{/if}

<style>
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    margin: 1rem;
    background: #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    cursor: pointer;
  }
</style>
