<template>
  
  <Header />

  <body>
    <Home 
    :projModal="openProjModal"
    />
  </body>

  <ProjectModal 
  v-if="openProj"
  :projModal="openProjModal"
  />

  <ConfirmModal 
  v-if="openConfirm"
  :confirmModal="openConfirmModal"
  />
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
      openProj: false,
      openConfirm: false
    }
  },
  methods:{
    openProjModal(){
      this.openProj = !this.openProj
    },
    openConfirmModal(){
      this.openConfirm = !this.openConfirm
    }

  }

};
</script>

<style></style>
