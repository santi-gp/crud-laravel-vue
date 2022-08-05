<template>
  <HeaderView />
  <MainView />
  <FooterView />
</template>

<script>
import FooterView from "./components/FooterView.vue";
import HeaderView from "./components/HeaderView.vue";
import MainView from "./components/MainView.vue";
export default {
  components: {
    HeaderView,
    MainView,
    FooterView,
  },
};
</script>