<template>
  <div id="app">
    
    <div class="wrapper">
      <Sidebar/>

      <div class="main-panel">
        <Navbar/>

        <div class="content">
           <router-view/>
        </div>

        <Footer/>
      </div> 

    </div>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components :{
    Sidebar,
    Footer,
    Navbar
  }
}
</script>>

<style>


</style>
