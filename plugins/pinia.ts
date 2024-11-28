import type { Pinia } from 'pinia';

import { useMainStore } from '~/store/main';

export default defineNuxtPlugin(({ $pinia }) => {
  return {
    provide: {
      store: useMainStore($pinia as Pinia),
    },
  };
});
