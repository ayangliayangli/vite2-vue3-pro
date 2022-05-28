import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", {
  state: () => {
    return {
      name: "xiaoyangyang",
    };
  },
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    modifyName(name: string) {
      this.name = name;
    },
  },
});
