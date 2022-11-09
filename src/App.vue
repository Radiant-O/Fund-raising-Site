<template>
  <header class="hero">
    <div class="top-header">
      <img src="./assets/images/logo.svg" alt="" />
      <Navbar />
    </div>
  </header>
  <body>
    <Home />
  </body>
  <ProjectModal 
  />
  <ConfirmModal/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import ProjectModal from "./components/ProjectModal.vue";
import Home from "./views/Home.vue";
import ConfirmModal from "./components/ConfirmModal.vue"
export default {
  components: {
    Navbar,
    Home,
    ProjectModal,
    ConfirmModal
  },
  data(){
    return{
      
    }
  }
};
</script>

<style></style>
