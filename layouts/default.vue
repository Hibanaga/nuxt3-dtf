<script lang="ts" setup></script>

<template>
  <div>
    <HeaderComponent/>
    <slot />
  </div>
</template>

<style scoped></style>

<script>
  import HeaderComponent from '~/src/components/layout/Header';

  export default {
    components: { HeaderComponent }
  }
</script>
