<template>
  <header>
    <img src="./assets/images/logo.svg" alt="">
    <Navbar/>
  </header>
  <body>

    <!-- <Home/> -->
    <ProjectModal/>
  </body>
</template>

<script>
import Navbar from './components/Navbar.vue';
import ProjectModal from './components/ProjectModal.vue';
import Home from './views/Home.vue';
export default {
    components: { Navbar, Home, ProjectModal }
}
</script>

<style>
       

</style>