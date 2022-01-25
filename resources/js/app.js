require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import { routes } from './routes';
import StoreData from './store';

import MainApp from './MainApp.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

// initializing Vue Router
const router = new VueRouter({
    mode: 'history',
    routes
});

// initializing Vuex
const store = new Vuex.Store(StoreData);

// loading everything upon opening the system.
// calling the main vue app component
const app = new Vue({
	el: '#app',
	router,
	store,
	components: {
		MainApp
	}
});