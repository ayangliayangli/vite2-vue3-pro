<script setup lang="ts">
import { RouterView } from "vue-router";
import { Transition, KeepAlive, Suspense } from "vue";
</script>

<template>
  <div>
    <Transition>
      <KeepAlive>
        <Suspense>
          <RouterView></RouterView>
        </Suspense>
      </KeepAlive>
    </Transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
