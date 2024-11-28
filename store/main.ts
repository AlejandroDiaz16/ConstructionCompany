import { defineStore } from 'pinia';

const initState = {
  myState: '',
};

export const useMainStore = defineStore('main', {
  state: () => initState,
  actions: {
    setMyState(value: string) {
      this.myState = value;
    },
  },
});
