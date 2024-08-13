import { stageInterface } from '@/interfaces/stages';

export interface responseStageInterface {
  id: string;
  name: string;
  header_color: string;
  description: string;
  pipeline: string;
  order: number;
  created_at: string;
}

export interface stateInterface {
  count: number;
  currentPage: number;
  list: stageInterface[];
  error: null | unknown | string;
  isLoading: boolean;
}

