<template>
  <header class="bgc-1 py-1">
    <div class="margin-wrap flex-row jc-between ai-center">
      <h1 class="f-grow1 color-3">Logo</h1>
      <Burger />
    </div>
  </header>
</template>
<script>
import Burger from "./Burger.vue";
export default {
  name: "HeaderView",
  components: { Burger },
};
</script>