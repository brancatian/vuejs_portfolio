<template>
  <div class="nav-bar">
    <nav>
      <img src="../assets/images/bolby_logo.svg" alt="">
      <ul>
        <li :class="{'active': activeSection === 'home'}" @click="goToSection('home')">Home</li>
        <li :class="{'active': activeSection === 'about'}" @click="goToSection('about')">About</li>
        <li>Experience</li>
        <li>Works</li>
        <li>Pricing</li>
        <li>Testimonials</li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store'

 export default defineComponent({
    name: 'Header',
    computed:{
      activeSection(){
        // console.log("ACTIVE ",store.getters.getNavActive);
        return store.getters.getNavActive;
      }
    },

    methods:{
      goToSection(section: any){
        const element = document.querySelector('#'+section);
        element?.scrollIntoView({behavior: 'smooth'});
        setTimeout(()=>{
          store.commit('setNavActive', section);
        }, 1000);
      }
    }
 })
</script>
<style>
  .nav-bar{
    background-color: #353353;
    color: white;
    padding: 50px 40px 40px;
    height: 100vh;
    min-height: 100vh;
    position: fixed;
    top: 0;
    width: 290px;
  }
  .nav-bar a {
    color: white;
    text-decoration: none;
  }
  ul{
    margin-top: 100px;
    padding-left: 0;
    text-align: left;
    line-height: 40px;
  }
  ul li{
    list-style-type: none;
    cursor: pointer;
    font-weight: bold;
  }
  ul li.active{
    color: #ffd15c;
  }
</style>