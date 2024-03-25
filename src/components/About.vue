<template>
  <div class="about__content">
    <div class="about__wrapper">
      <h2 class="title">About Me</h2>
    </div>
    <div class="about__wrapper">
        <div class="about__left">
          <img src="../assets/images/avatar-2.svg" alt="">
        </div>
        <div class="about__right">
          <div class="about__message">
            <p>Bachelor's degree in Software Engineering with background in web design and development.
              +5 of experience in web development</p>
            <button class="about__hire button--pink">Download CV</button>
          </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name:'About'
  })
</script>
<style>
  .about__content{
    /* height: 100vh; */
    width: 100%;
    /* background-color: white; */
    display: flex;
    color: #454360;
    display: flex;
    flex-direction: column;
  }
  .about__wrapper{
    width: 100%;
    max-width: 920px;
    margin: auto;
    display: flex;
  }
  .about__left{
    width: 30%;
  }
  .about__right{
    width: 70%;
  }
  .about__message{
    padding: 30px;
    background-color: white;
    border-radius: 20px;
    position: relative;
    box-shadow:  0px 5px 20px 0px rgba(69, 67, 96, 0.1);
  }
  .about__message::before{
    content: "";
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 15px solid #fff;
    position: absolute;
    left: -15px;
    top: 20%;
  }
  /* .introduction__hire{
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
  } */
</style>