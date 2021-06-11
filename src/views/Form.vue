<template>
  <v-container fluid>
		<!-- 2da prueba: Formulario -->

		<!--
			
			Tu segunda prueba es crear un formulario funcional haciendo uso de Vuetify y de Vuex.

			Aquí está la documentación con la guia para el uso de los "UI components" de Vuetify.
				https://vuetifyjs.com/en/components/forms/

			Aquí está la documentación con la guia para el uso y manejo de Vuex.
				https://vuex.vuejs.org/guide/state.html

			Antes de comenzar con el formulario debes crear un modulo en la store para almacenar la información del formulario.
			Crea el archivo formulario.module.js y dentro crea un estado con una variable para cada campo del formulario.
			Después importa ese modulo desde el archivo index.js para que puedas hacer uso de él.
			Ahora sí puedes usar la store para almacenar la información del formulario.

			El formulario debe contener:
				1 text-field para nombre o id de usuario que sea obligatorio.
				1 text-field para correo electrónico que sea obligatorio y que valide el formato de correo.
				1 text-field para password que sea obligatorio y que valide que se escriban al menos 8 caracteres incluidos letras y números.
				1 combo-box como tú gustes que sea.
				1 date-picker como tú gustes que sea.
				1 time-picker como tú gustes que sea.
				1 check-box como tú gustes que sea.

			Crearas dos botones:
				1 botón para "Cancelar" que limpie todo el formulario, sin tocar la store.
				1 botón para "Aceptar" que:
					envié la información del formulario al store
					imprima en consola del navegador un objeto con el contenido de la store.
		
		-->
  </v-container>
</template>

<script>
export default {
  name: "Form",
};
</script>