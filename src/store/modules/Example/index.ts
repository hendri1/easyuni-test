import { defineStore } from 'pinia';

import actions from './actions';
import getters from './getters';
import state from './state';

const useExampleStore = defineStore('example', {
  state: () => ({
    ...state,
  }),
  getters: {
    ...getters,
  },
  actions: {
    ...actions,
  },
});

export default useExampleStore;
