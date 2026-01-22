import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // 1. 添加 base 路径，确保 GitHub Pages 资源引用正确
      // 这里的 'galaxy-diary' 必须和你的 GitHub 仓库名称完全一致
      base: '/galaxy-diary/', 
      
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      // 2. 显式指定构建输出目录为 dist（虽然是默认值，但在部署脚本中更明确）
      build: {
        outDir: 'dist',
      }
    };
});
