<template>
  <HelloWorld />
  <PrimerComponente />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import PrimerComponente from "./components/PrimerComponente.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    PrimerComponente,
  },
};
</script>

<style></style>
