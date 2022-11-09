<template>
  <header class="hero">
    <div class="top-header">
      <img src="../assets/images/logo.svg"/>
      <div>
        <img src="../assets/images/icon-hamburger.svg" class="cursor-pointer lg:hidden" @click="toggleBar"  v-if="!showbar"/>
        <img src="../assets/images/icon-close-menu.svg" class="cursor-pointer lg:hidden" @click="toggleBar" v-else="showbar">
      </div>
      

      <nav class="nav">
        <a href="#">About</a>
        <a href="#">Discover</a>
        <a href="#">Get Started</a>
      </nav>
    </div>

    <nav class="mobile_nav" v-if="showbar">
    <a href="#">About</a>
    <a href="#">Discover</a>
    <a href="#">Get Started</a>
  </nav>A
  </header>
  
  
</template>

<script>
export default {
  data(){
    return{
      showbar: false
    }
  },
  methods:{
    toggleBar(){
      this.showbar = !this.showbar
    }
  }
}
</script>

<style>

</style>