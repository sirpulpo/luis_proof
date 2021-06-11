<template>
  <v-list nav dense>
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="../assets/shs_logo.jpg"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item-group
      v-model="group"
      active-class="text--accent-4"
      class="my-6"
    >
      <template v-for="item in items">
        <router-link :key="item.title" :to="item.route">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "MenuBar",

  data() {
    return {
      group: null,

      items: [
        {
          title: "Inicio",
          icon: "mdi-view-dashboard",
          route: "/"
        },
        {
          title: "Formulario",
          icon: "mdi-book-account-outline",
          route: "/form",
        },
        {
          title: "Gráficas",
          icon: "mdi-calendar-multiple",
          route: "/charts",
        },
      ],
    };
  },
};
</script>