import Vue from 'vue';
import Vuex from 'vuex';
import modules from './modules';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    key: 'asteria-key',
    modules: ['auth'],
});

export const store = new Vuex.Store({
    modules: modules,
    plugins: [vuexLocal.plugin],
});
