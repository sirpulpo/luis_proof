<template>
  <v-container fluid>
    <v-row class="text-center">
      <!-- Bienvenida -->
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mt-6 mb-12">
          Evaluación de conocimientos
        </h1>

        <h2 class="headline font-weight-bold mb-6">Hola!</h2>

        <p class="subheading font-weight-regular">
          Nosotros somos Software Heuristic Solutions.<br />
          Bienvenido a la prueba de conocimientos prácticos.<br />
          Nos interesa conocer tus habilidades usando: Vue, Vuetify, Vuex y Vue
          Chartjs.<br />
          No hay límite de tiempo, pero se contará el tiempo que tardes en
          enviar tus respuestas.<br />
          <br />
        </p>
      </v-col>
    </v-row>

    <v-divider class="mb-12 mx-auto" width="80%" />

    <v-row class="text-center">
      <!-- Instrucciones -->
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-6">Instrucciones</h2>

        <p>
          Todo tu código debe estar comentado.<br />
          Deberás subir tus respuestas al mismo repositorio de donde bajaste
          esta prueba.<br />
          Cada que termines una prueba debes hacer "commit" y "push" al
          repositorio antes de continuar con la siguiente.<br />
          Tú primer prueba esta más abajo y las demás están dentró del menú de
          la esquina superior izquierda.<br />
          El código de cada una de tus respuestas lo deberás escribir en su
          componente correspondiente.<br />
          Es tu libertad modularizar los componentes tanto como quieras.<br />
          Dentro de la carpeta "views" debe estar el componente principal.<br />
          Si los tiene, sus componentes hijos deberán estar en la carpeta
          "components".<br />
          Por favor siente con la confianza de contactarnos si necesitas ayuda
          en cualquier momento.<br />
          <br />
        </p>
      </v-col>
    </v-row>

    <v-divider class="mb-12 mx-auto" width="80%" />

    <v-row class="text-center mb-6">
      <!-- 1ra prueba: Librerías y configuración -->
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-6">
          1ra prueba: Vuex
        </h2>

        <p>
          Tu primer prueba es instalar y configurar Vuex.<br />
          Vuex es una librería que te permite gestionar el estado de una
          aplicación web, es decir,<br />
          simula una pequeña base de datos para mantener centralizada y
          normalizada la información de la app.<br />
          Nosotros ya hemos instalado y configurado Vue-Router y Vuetify.<br />
          En la carpeta src del código de éste proyecto hemos colocado un
          fichero de rutas llamado "router".<br />
          Dentro se encuentrá la lógica y funcionamiento de Vue-Router.<br />
          También lo hemos importado desde el archivo "main.js" de éste
          proyecto.<br />
          Deberas crear un fichero llamado "store" donde colocarás la lógica y
          el funcionamiento de Vuex.<br />
          Además de importarlo desde el archivo "main.js".<br />
          Aquí está la
          <a href="https://vuex.vuejs.org/installation.htm" target="blank">
            documentación
          </a>
          con la guia para la instalación y configuración de Vuex.<br />
          Más adelante deberás instalar y configurar Vue-Chartjs. Por ahora sólo
          ésta librería. <br />
          No olvides hacer "push" al repositorio al terminar y después de
          confirmar el funcionamiento del proyecto.
        </p>
      </v-col>
    </v-row>

    <!-- <v-divider class="mb-9 mx-auto" width="80%" /> -->
  </v-container>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld'

export default {
  name: "Home",

  components: {
    // HelloWorld,
  },
};
</script>
