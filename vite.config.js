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
      '@redux': path.resolve(__dirname, 'app/redux'),
      '@utilities': path.resolve(__dirname, 'app/utilities')
    }
  }
})
