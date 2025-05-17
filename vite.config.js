import {reactRouter} from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
  plugins: [reactRouter(), tailwindcss()],
  resolve: {
    alias: {
      // Shortern the import paths
      '@components': path.resolve(__dirname, 'app/components'),
      '@constants': path.resolve(__dirname, 'app/constants'),
      '@contexts': path.resolve(__dirname, 'app/contexts'),
      '@hooks': path.resolve(__dirname, 'app/hooks'),
      '@redux': path.resolve(__dirname, 'app/redux'),
      '@utilities': path.resolve(__dirname, 'app/utilities')
    }
  }
})
