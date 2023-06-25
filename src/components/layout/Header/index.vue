<template>
  <Head>
    <Title>random title</Title>
  </Head>

  <USlideover class="slider" side="left" v-model="isOpen">
    <h1>title</h1>
  </USlideover>

  <header class="header">
    <div class="column-preview">
      <div class="burger" @click="isOpen = true">
        <div class="burger-line top" />
        <div class="burger-line" />
        <div class="burger-line bottom" />
      </div>
      <NuxtLink class="project-name" href="/">
        GFU
      </NuxtLink>
    </div>

    <div class="column-activity"></div>
    <div class="column-login"></div>
  </header>
</template>

<style lang="scss" scoped>
@import './styles';
</style>

<script lang="ts" setup>
  import { ref } from '@vue/reactivity';

  const isOpen = ref(false);
</script>

<script lang="ts">
  export default {
    name: "HeaderComponent"
  }
</script>
