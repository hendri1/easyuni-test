<script setup lang="ts">
import { onMounted } from 'vue'
import useStagesStore from '@/store/modules/Stages'
import Board from '@/components/organisms/Board/index.vue'

const stagesStore = useStagesStore()
const { fetchStages } = stagesStore

onMounted(async () => {
  await fetchStages()
})
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">Kanban</h1>
    <Board :is-loading="stagesStore.isLoading" :stages="stagesStore.list" />
  </div>
</template>
