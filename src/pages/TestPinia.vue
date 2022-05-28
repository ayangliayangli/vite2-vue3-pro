<template>
  <div>
    <div>name: {{ mainStore.name }}</div>
    <div>nameLength: {{ mainStore.nameLength }}</div>

    <input type="text" :value="mainStore.name" @change="handleTextChange" />
    <input type="button" value="$patch" @click="handleTestPatch" />
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store/main";
const mainStore = useMainStore();

const handleTextChange = (e: any) => {
  const curName = e?.target?.value;
  mainStore.modifyName(curName);
};

const handleTestPatch = () => {
  mainStore.$patch({
    name: "$patch action name",
  });
};
</script>

<style></style>
