<template>
  <div class="introduction__content">
    <div class="introduction__wrapper">
        <img src="../assets/images/avatar-1.svg" alt="">
        <h1>Sebastian Branca</h1>
        <p>I'm a Developer </p>
        <button class="introduction__hire">Hire me</button>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name:'Introduction'
  })
</script>
<style>
  .introduction__content{
    height: 100vh;
    width: 100%;
    background-color: #353353;
    display: flex;
  }
  .introduction__wrapper{
    margin: auto;
  }
  .introduction__hire{
    color: #fff;
    background: #ff4c60;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    cursor: pointer;
    border: none;
    border-radius: 30px;
    font-weight: 700;
    padding: 12px 32px;
    font-size: 16px;
  }
</style>