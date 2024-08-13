/// <reference types="vite/client" />
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module '@/utils'

declare module '@/interfaces/*' {
  import { stageInterface } from '@/interfaces/stages.interface'
  export { stageInterface }
}
