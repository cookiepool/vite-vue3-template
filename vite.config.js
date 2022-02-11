import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 这个插件的eslint报错信息只会显示在控制台上，不会显示在页面上
import eslintPlugin from '@nabla/vite-plugin-eslint';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: { '@': path.join(__dirname, 'src') }
  }
});
