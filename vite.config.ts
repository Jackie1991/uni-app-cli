import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-i18n'],
      dts: 'types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
    Components({
      dirs: ['src/components'],
      dts: 'types/components.d.ts',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
  build: {},
})
