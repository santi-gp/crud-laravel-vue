<template>
  <main class="flex-column">
    <div class="main_small margin-wrap flex-row f-grow1">
      <router-view />
    </div>
  </main>
</template>
<script>
export default {
  name: "MainView",
};
</script>