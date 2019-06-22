import Vue from 'vue';
import Vuex from 'vuex';
import cardDictionary from './modules/cardDictionary'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cardDictionary
  },
});
