<template>
  <div class="experience__content">
    <div class="experience__wrapper">
      <h2 class="title">Experience</h2>
    </div>
    <div class="experience__wrapper">
        <div class="experience__column">
          <div class="experience__container">
            <div class="experience__item">
                <span>2019 - Present</span>
                <h3>Academic Degree</h3>
                <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
            </div>
            <div class="experience__item">
                <span>2019 - Present</span>
                <h3>Academic Degree</h3>
                <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
            </div>
            <span class="line"></span>
          </div>
        </div>
        <div class="experience__column">
          <div class="experience__container">
            <div class="experience__item">
                <span>2019 - Present</span>
                <h3>Academic Degree</h3>
                <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
            </div>
            <div class="experience__item">
                <span>2019 - Present</span>
                <h3>Academic Degree</h3>
                <p>Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.</p>
            </div>
            <span class="line"></span>
          </div>
        </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name:'Experience'
  })
</script>
<style>
  .experience__content{
    /* height: 100vh; */
    width: 100%;
    /* background-color: white; */
    display: flex;
    color: #454360;
    display: flex;
    flex-direction: column;
  }
  .experience__wrapper{
    width: 100%;
    max-width: 1020px;
    margin: auto;
    display: flex;
  }
  .experience__column{
    width: 50%;
    padding-left: 15px;
    padding-right: 15px;
  }

  .experience__message{
    padding: 30px;
    background-color: white;
    border-radius: 20px;
    position: relative;
    box-shadow:  0px 5px 20px 0px rgba(69, 67, 96, 0.1);
  }
  .experience__container{
    padding: 30px;
    background-color: white;
    box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
    position: relative;
  }

  .experience__message::before{
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

  .experience__item{
    text-align: left;
    padding-left: 30px;
    margin-bottom: 50px;
    position: relative;
  }

  .experience__item::after{
    content: "\e019";
    background: #fff;
    font-family: "simple-line-icons";
    font-size: 24px;
    color: #ff4c60;
    position: absolute;
    left: -7px;
    top: 0;
    z-index: 1;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .experience__item span{
    font-size: 14px;
    color: #8b88b1;
  }
  .experience__item h3{
    color: #454360;
    font-size: 20px;
    font-weight: bold;
  }
  span.line {
    position: absolute;
    width: 1px;
    background-color: #ff4c60;
    top: 30px;
    bottom: 30px;
    left: 34px;
  }
</style>