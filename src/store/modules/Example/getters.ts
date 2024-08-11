import { stateInterface } from './interface';

const getData = (state: stateInterface): string => {
  return state.data;
};

export default {
  getData,
};
