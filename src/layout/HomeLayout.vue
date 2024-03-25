<template>
  <div id="app">
    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Header.vue';

export default defineComponent({
  name:'HomeLayout',
  components:{
    Header
  }
})
</script>
<style>

</style>