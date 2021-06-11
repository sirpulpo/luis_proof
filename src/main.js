import Vue from "vue";
import App from "./App.vue";

// Se importa el archivo index.js que esta dentro de /router, el cual contiene la configuración de Vue-Router
import router from "./router";
// Se importa el archivo vuetify.js que esta dentro de /plugins, el cual contiene la configuración de Vuetify
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router, // Se pasa como argumento la configuración de Vue-Router
  vuetify, // Se pasa como argumento la configuración de Vuetify
  render: (h) => h(App),
}).$mount("#app");
