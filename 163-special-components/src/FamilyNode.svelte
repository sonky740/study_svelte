<!-- 한 번만 실행함. -->
<!-- 공유 스크립트 = 여러 컴포넌트가 존재할 때 이 안에 들어간 js를 공유함 -->
<script context="module">
  console.log('Runs once!');

  let deactivateNode;
</script>

<script>
  export let member;

  let isActive;

  console.log('Runs multiple times!');

  function deactivate() {
    isActive = false;
  }

  function activate() {
    if (deactivateNode) {
      deactivateNode();
    }
    isActive = true;
    deactivateNode = deactivate;
  }
</script>

<div class:active={isActive}>
  <button on:click={activate}>active</button>
  <h1>{member.name}</h1>
  {#if member.isParent}
    {#each member.children as child}
      <svelte:self member={child} />
    {/each}
  {/if}
</div>

<style>
  div {
    margin-left: 2rem;
  }

  .active {
    color: red;
  }
</style>
