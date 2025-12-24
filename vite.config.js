import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './', // 确保构建路径为相对路径，适配 GitHub Pages
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // 使用现代 Sass 编译器 API
        quietDeps: true,        // 屏蔽依赖(如bootstrap)中的警告
        // 显式屏蔽特定的废弃警告
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin', 'color-functions', 'mixed-decls'],
      },
    },
  },
})