import { defineStore } from 'pinia';

import actions from './actions';
import state from './state';

const useStagesStore = defineStore('stages', {
  state: () => ({
    ...state,
  }),
  actions: {
    ...actions,
  },
});

export default useStagesStore;
