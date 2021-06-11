<template>
  <v-footer dark padless absolute outline>
		<v-card
			flat
      tile
      class="text-center"
			width="100%"
		>

			<v-card-text class="my-n2">
				El código y la idea de esta prueba es propiedad intelectual de Software Heuristic Solutions.<br />
				Todos los derechos reservados.
			</v-card-text>

			<v-divider class="mx-12" />

			<v-card-text class="mt-n2">
				{{ new Date().getFullYear() }} — <strong>&copy; SHS</strong>
			</v-card-text>
		</v-card>
  </v-footer>
</template>