import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                otherView: 'profesorado.html'  // Add all your HTML files here
            }
        }
    }
});