import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                profesorado: 'profesorado.html',
                licencias: 'licencias.html',
                normativa: 'normativa.html'
            }
        }
    }
});