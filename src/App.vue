<template>
  <v-app>
    <!-- Componente - Barra de Navegación -->
    <app-bar @showMenu="drawer = $emit" class="mb-12 pb-12" />

    <!-- Componente - Menú de Navegación -->
    <v-navigation-drawer dark v-model="drawer" fixed temporary>
      <menu-bar @offMenu="drawer = false" />
    </v-navigation-drawer>

    <router-view class="mt-12" />

    <!-- Componente - Pié de página -->
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "@/components/base/AppBar.vue"; // Componente - Barra de Navegación
import MenuBar from "@/components/base/MenuBar.vue"; // Componente - Menú de Navegación
import Footer from "@/components/base/Footer.vue"; // Componente - Pié de página

export default {
  name: "App",

  components: {
    AppBar,
    MenuBar,
    Footer,
  },

  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
a:link {
  text-decoration: none;
}
</style>