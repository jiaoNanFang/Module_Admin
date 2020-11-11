<template>
  <div class="page-container" style="width:99%;margin-top:15px;">
    <h1 style="font-size: 40px;font-weight: 800;">打工人</h1>
    <div class="text-content" style="margin-top: 40px">
      <div style="font-size: 25px">
        我们要悄悄的打工，然后惊艳所有人
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    components:{
    },
    methods :{
    }
  }
</script>

<style>
  h1 {
    text-align: center;
  }
  .page-container {
    height: 100vh;
  }
  .text-content {
    width: 100%;
  }
  .text-content div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .text-content p {
    width: 50%;
    text-indent: 2rem;
  }
</style>
