import { createStore } from "vuex";

export default createStore({
  state:()=> ({
    navList: ['home','about'],
    navActive: 'home'
  }),
  getters: {
    getNavActive(state){
      return state.navActive;
    },
    navList(state): string[]{
      return state.navList;
    }
  },
  mutations: {
    setNavActive(state, itemActive){
      state.navActive = itemActive;
    }
  },
  actions: {},
  modules: {},
});
