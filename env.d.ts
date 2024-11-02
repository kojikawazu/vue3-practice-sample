/// <reference types="vite/client" />

// Vueの型定義を追加
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}