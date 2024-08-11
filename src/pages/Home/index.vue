<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useExampleStore } from '@store/modules/Example'

const exampleStore = useExampleStore()
const { setData } = exampleStore
const { getData } = storeToRefs(exampleStore) 

const changeContent = () => {
  setData('New content')
}
</script>

<template>
  <div>
    <h1>Home</h1>
    <p>Home page content</p>
    <button @click="changeContent">Change data</button>
    <p>{{ getData }}</p>
  </div>
</template>