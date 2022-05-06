<template>
  <div>
    <NavBar />
    <h1 class="title">Home Page</h1>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomePageView",
  components: {
    NavBar,
  },
};
</script>
<style scoped>
.title {
  text-align: center;
  font-size: 5rem;
  padding-top: 5rem;
}
</style>
