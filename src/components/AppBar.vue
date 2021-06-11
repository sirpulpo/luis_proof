<template>
  <v-app-bar app dense fixed elevation="9" dark hide-on-scroll>
    <v-app-bar-nav-icon
      color="green"
      @click.stop="$emit('showMenu', true)"
    ></v-app-bar-nav-icon>

    <v-app-bar-title> APCS </v-app-bar-title>

    <v-spacer />
    
    <!-- <v-badge overlap dot color="amber" class="mx-2">
      <v-btn icon class="mx-n2">
        <v-icon>mdi-calendar-alert</v-icon>
      </v-btn>
    </v-badge> -->

    <v-badge
      :content="alertState"
      :value="alertState"
      overlap
      dot
      color="red"
      class="mx-2"
    >
      <v-btn v-if="alertState" icon class="mx-n2" @click="showAlert()">
        <v-icon>mdi-bell-alert-outline</v-icon>
      </v-btn>
    </v-badge>
  </v-app-bar>
</template>

<script>
export default {
    name: "AppBar",
}
</script>