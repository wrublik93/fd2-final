<template>
  <v-app>
    <Header></Header>
    <v-content>
        <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
  import Header from "../components/common/Header";
  import Footer from "../components/common/Footer"

  export default {
    name: "Home",
    components: {
      Header,
      Footer

    }
  }
</script>

<style scoped>

</style>
