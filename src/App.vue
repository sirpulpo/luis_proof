<template>
  <v-app>
    <app-bar @showMenu="drawer = $emit" class="mb-12 pb-12" />

    <v-navigation-drawer dark v-model="drawer" fixed temporary>
      <menu-bar @offMenu="drawer = false" />
    </v-navigation-drawer>

    <router-view class="mt-12" />

    <Footer />
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import MenuBar from "@/components/MenuBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",

  components: {
    AppBar,
    MenuBar,
    Footer
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