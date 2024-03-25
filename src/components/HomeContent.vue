<template>
  <div class="main-content">
    <section id="introduction">
        <Introduction></Introduction>
    </section>
    <section id="About">
        <About></About>
    </section>
    <section id="About">
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
  }
});
</script>
<style scoped lang="scss">
  section{
    padding-top: 110px;
  }
  section#introduction{
    padding-top: 0;
  }
  .main-content{
    color: white;
    margin-left: 290px;
  }
</style>
