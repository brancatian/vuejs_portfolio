<template>
  <div class="main-content">
    <section id="home">
        <Introduction></Introduction>
    </section>
    <section id="about">
        <About></About>
    </section>
    <section id="about_two">
        <About></About>
    </section>
    <section id="about_three">
        <About></About>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Introduction from "./Introduction.vue";
import About from './About.vue';

export default defineComponent({
  name: "HomeContent",
  components:{
    Introduction,
    About
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event: any){
      console.log(window.scrollY);
      console.log("ABOUT ", document.getElementById('about')?.getBoundingClientRect().top);
    }
  }
});
</script>
<style scoped lang="scss">
  section{
    padding-top: 110px;
    padding-left: 30px;
  }

  section#home{
    padding-top: 0;
    padding-left: 0;
  }
  .main-content{
    color: white;
    margin-left: 290px;
  }
</style>
