<script setup lang="ts">
import { PropType } from 'vue';
import { stageInterface } from '@/interfaces/stages';

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  stages: {
    type: Array as PropType<stageInterface[]>,
    default: () => [],
  },
})
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <template v-if="props.isLoading">
      <div>Loading...</div>
    </template>
    <template v-else>
      <div v-for="stage in props.stages" :key="stage.id">
        <div>{{ stage.name }}</div>
        <div>{{ stage.description }}</div>
      </div>
    </template>
  </div>
</template>