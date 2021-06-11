<template>
  <v-app-bar app dense fixed elevation="9" dark>
    <v-app-bar-nav-icon
      color="green"
      @click.stop="$emit('showMenu', true)"
    />

    <v-app-bar-title> SHS </v-app-bar-title>

    <v-spacer />

    <div class="mt-6">
      <v-switch
				inset
        :append-icon="switch_theme_icon"
        color="green"
        v-model="$vuetify.theme.dark"
      />
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",

	computed: {
		switch_theme_icon() {
      return this.$vuetify.theme.dark ? "mdi-lightbulb-on-outline" : "mdi-brightness-4";
    }
	},
};
</script>