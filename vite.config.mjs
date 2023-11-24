import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgrPlugin({ include: '**/*.svg?react', exportAsDefault: true }),
    react(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});
