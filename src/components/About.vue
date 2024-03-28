<template>
  <div class="about__content">
    <div class="about__wrapper">
      <h2 class="title">About Me</h2>
    </div>
    <div class="spacer-60"></div>
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
          <div class="about__skills">
              <div class="about__skillGroup">
                <p>Frontend Development</p>
                <div role="progressbar" aria-valuemin="0" class="bg-warning progress-bar" aria-valuenow="85" aria-valuemax="100" style="width: 85%;">
                </div>
              </div>
              <div class="about__skillGroup">
                <p>DevOps</p>
                <div class="progress-bar"></div>
              </div>
              <div class="about__skillGroup">
                <p>Product Design</p>
                <div class="progress-bar"></div>
              </div>
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
    max-width: 1020px;  
    margin: auto;
    display: flex;
  }
  .about__left{
    width: 25%;
    display: flex;
  }
  .about__left img{
    margin-right: auto;
    margin-top: 0;
    max-width: 150px;
    max-height: 150px;
  }
  .about__right{
    width: 70%;
    padding: 30px;
    background-color: white;
    border-radius: 20px;
    position: relative;
    box-shadow:  0px 5px 20px 0px rgba(69, 67, 96, 0.1);
    display: flex;
  }
  .about__message{
    width: 50%;
    display: flex;
    text-align: left;
    flex-direction: column;
  }
  .about__message p{
    margin-top: 0;
    line-height: 25px;
  }
  .about__message button{
    margin-left: 0;
    max-width: 200px;
  }
  .about__skills{
    width: 50%;
  }
  .about__skillGroup{
    text-align: left;
  }
  .about__skillGroup p{
    margin-top: 0;
    font-weight: bold;
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

  .progress-bar {
    border-radius: 15px;
    float: left;
    width: 0;
    height: 100%;
    font-size: 12px;
    line-height: 7px;
    color: #fff;
    text-align: center;
    background-color: #353353;
    box-shadow: none;
    transition: width 0.6s ease;
  }
</style>