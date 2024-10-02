import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import nodecg from './vite-plugin-nodecg.mjs';
import rollupEsbuild from 'rollup-plugin-esbuild';
import rollupExternals from 'rollup-plugin-node-externals';

export default defineConfig({
  clearScreen: false,
  plugins: [
    react(),
    nodecg({
      server: {
        host: '192.168.3.34',
        port: 8080,
      },
      bundleName: 'yugioh',
      graphics: './src/graphics/*.tsx',
      dashboard: './src/dashboard/*.tsx',
      extension: {
        input: './src/extension/index.ts',
        plugins: [rollupEsbuild(), rollupExternals()],
      },
    }),
  ],
  assetsInclude: ['**/*.riv'], // rivファイルを適用させるコンフィグ
});
