<template>
  <v-container>
		<!--2da prueba: Formulario -->

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

  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

	<v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
    ></v-text-field>

	<v-combobox
        v-model="select"
         :items="items"
         label="Combobox"
          multiple
          outlined
          dense
    ></v-combobox>

	<v-date-picker v-model="picker"></v-date-picker>

	<br>
	<br>

	<v-time-picker
      v-model="timeStep"
      :allowed-minutes="allowedStep"
      class="mt-4"
      format="24hr"
    ></v-time-picker>

	<br>
	<br>

	<v-checkbox
      v-model="checkbox1"
      :label="`Checkbox 1: ${checkbox1.toString()}`"
    ></v-checkbox>
    <v-checkbox
      v-model="checkbox2"
      :label="`Checkbox 2: ${checkbox2.toString()}`"
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Validate
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

  </v-form>

  </v-container>
</template>

<script>
export default {
  name: "Form",

    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },

		select: ['Vuetify', 'Programming'],
        items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify',
        ],

		picker: new Date().toISOString().substr(0, 10),

		time: '11:15',
        timeStep: '10:10',

		checkbox1: true,
        checkbox2: false,

    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }


</script>