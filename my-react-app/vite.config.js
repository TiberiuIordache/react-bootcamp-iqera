import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {

  if (command === 'serve') {
    console.log('Running dev server...');
    console.log('isPreview:', isPreview);
    console.log('isSsrBuild:', isSsrBuild);
    console.log('mode:', mode);
  } else {
    console.log('Building for production...');
  }

  return {
    base: mode === 'production' ? '/my-react-app/' : '/',
    plugins: [react()],
  };
});
