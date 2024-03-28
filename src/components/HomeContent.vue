<template>
  <div class="main-content">
    <section :id="sectionList[0]">
        <Introduction></Introduction>
    </section>
    <section :id="sectionList[1]">
        <About></About>
    </section>
    <section :id="sectionList[2]">
        <Experience></Experience>
    </section>
    <section :id="sectionList[3]">
        <About></About>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Introduction from "./Introduction.vue";
import About from './About.vue';
import Experience from './Experience.vue';
import store from '@/store'

export default defineComponent({
  name: "HomeContent",
  data(){
    return {
      sectionList: ['home','about', 'experience','about_three']
    }
  },
  components:{
    Introduction,
    Experience,
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
      let currentActive = store.getters.getNavActive;
        this.sectionList.find(element=> {
          let currentTop = document.getElementById(element)?.getBoundingClientRect().top as number;
          if(currentTop <= 0 ){
            currentActive = element;
            return;
          }
        });
        store.commit('setNavActive', currentActive);
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
