import Vue from 'vue';
import App from './App.vue';
import VueScrollmagic from 'vue-scrollmagic';
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount('#app');
Vue.use(VueScrollmagic);
