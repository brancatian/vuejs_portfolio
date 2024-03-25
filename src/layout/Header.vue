<template>
  <div class="nav-bar">
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
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

 export default defineComponent({
    name: 'Header',
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
</style>