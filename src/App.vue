<template>
  <HelloWorld />
  <PrimerComponente />
  <FormularioContacto />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import PrimerComponente from "./components/PrimerComponente.vue";
import FormularioContacto from "./components/FormularioContacto.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    PrimerComponente,
    FormularioContacto,
  },
};
</script>

<style></style>
