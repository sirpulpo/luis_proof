<template>
  <v-container fluid>
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mt-6 mb-12">
          Evaluación de conocimientos
        </h1>

        <p class="subheading font-weight-regular">
          Hola!<br>
          Nosotros somos Software Heuristic Solutions.<br>
          Bienvenido a la prueba de conocimientos prácticos.<br>
          Nos interesa conocer tus habilidades usando: Vue, Vuetify, Vuex y Vue Chartjs.<br>
          No hay límite de tiempo, pero se contará el tiempo que tardes en enviar tus respuestas.<br>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Instrucciones
        </h2>

        <p>
          Todo tu código debe estar comentado.<br>
          Deberás subir tus respuestas al mismo repositorio de donde bajaste esta prueba.<br>
          En el menú de la esquina superior izquierda se encuentra el menu donde se deberan ver y poder revisar cada una de tus respuestas.<br>
          El código de cada una de tus respuestas lo deberás escribir en su componente correspondiente.<br />
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // import HelloWorld from '@/components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      // HelloWorld,
    },
  }
</script>
