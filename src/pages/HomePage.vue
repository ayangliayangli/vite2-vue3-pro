<template>
  <div>
    <div>HomePage ...</div>
    <div>VITE_APP_MY_VAR: {{ VITE_APP_MY_VAR }}</div>
  </div>
</template>

<script setup lang="ts">
const VITE_APP_MY_VAR = import.meta.env.VITE_APP_MY_VAR;
</script>

<style></style>
