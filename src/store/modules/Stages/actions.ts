import { sleep } from '@/utils';
import { stateInterface, responseStageInterface } from './interface';

const fetchStages = async function (this: stateInterface): Promise<void> {
  try {
    this.isLoading = true;
    await sleep(1000);
    const response = await fetch("./stages.json");
    const data = await response.json();
    
    if (data.count === 0) return

    this.count = data.count;
    this.currentPage = 1;
    this.list = data.results.map((stage: responseStageInterface) => ({
      id: stage.id,
      name: stage.name,
      headerColor: stage.header_color,
      description: stage.description,
      pipeline: stage.pipeline,
      order: stage.order,
      createdAt: stage.created_at,
    }));
  } catch (error: unknown) {
    this.error = error;
  } finally {
    this.isLoading = false;
  }
}

export default {
  fetchStages,
};