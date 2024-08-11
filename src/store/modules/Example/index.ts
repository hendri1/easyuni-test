import { defineStore } from 'pinia';

import actions from './actions';
import getters from './getters';
import state from './state';

export const useExampleStore = defineStore('example', {
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