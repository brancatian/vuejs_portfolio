<template>
  
  <div class="nav-bar" :class="{'nav-bar--open': getNavBarOpen === true}">
    <div class="navbar__icon" :class="[getNavBarOpen? 'icon-close':'icon-menu']" @click="changeNavbar()"></div>
    <nav>
      <img src="../assets/images/bolby_logo.svg" alt="">
      <ul>
        <li :class="{'active': activeSection === 'home'}" @click="goToSection('home')">Home</li>
        <li :class="{'active': activeSection === 'about'}" @click="goToSection('about')">About</li>
        <li :class="{'active': activeSection === 'experience'}" @click="goToSection('experience')">Experience</li>
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
    data() {
      return {
        navbarOpen: false
      }
    },
    computed:{
      activeSection(){
        return store.getters.getNavActive;
      },
      getNavBarOpen(): boolean{
        return this.navbarOpen;
      }
    },
    methods:{
      changeNavbar(){
        this.navbarOpen = !this.navbarOpen;
      },
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
    font-size: 16px;
  }
  ul li.active{
    color: #ffd15c;
  }
  
  .navbar__icon{
    cursor: pointer;
    display: none;
    color: #ff4c60;
  }
  @media screen and (max-width: 1024px) {
    .navbar__icon{
      display: block;
    }
    ul{
      margin-top: 20px;
    }
    .icon-close{
      font-size: 35px;
    }
    .nav-bar{
      z-index: 1000;
      right: 0;
      font-size: 22px;
      padding-top: 20px;
      padding-bottom: 20px;
      height: 50px;
      min-height: 50px;
      width: 50px;

      background-color: transparent;
    }
    .nav-bar--open{
      background-color: #353353;
      color: white;
      padding: 50px 40px 40px;
      height: 100vh;
      min-height: 100vh;
      position: fixed;
      top: 0;
      width: 290px;
    }
    .nav-bar nav{
      display: none;
    }
    .nav-bar.nav-bar--open nav{
      display: block;
    }
  }
</style>