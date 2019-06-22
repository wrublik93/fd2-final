<template>
  <div class="main-container">
    <Content/>
  </div>
</template>
<script>
  import Content from "../components/main/Content";
  export default {
    name: "MainPage",
    components: {
      Content
    }
  };
</script>
<style scoped>
  .main-container {
    display: flex;
    height: 100%;
  }
</style>
