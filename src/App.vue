<template>
  
  <Header />
  <body>
    <Home />
  </body>
  <!-- <ProjectModal 
  />
  <ConfirmModal/> -->
</template>

<script>
import Header from "./components/header.vue";
import ProjectModal from "./components/ProjectModal.vue";
import Home from "./views/Home.vue";
import ConfirmModal from "./components/ConfirmModal.vue"
export default {
  components: {
    Header,
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
