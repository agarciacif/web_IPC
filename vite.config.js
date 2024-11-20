import { defineConfig } from 'vite';

export default defineConfig({
    root: 'views', // Cambia el directorio raíz a 'src'
    build: {
        outDir: '../dist', // Cambia la salida al directorio raíz
        rollupOptions: {
            input: {
                main: 'views/index.html',       // Página principal
                profesorado: 'views/profesorado.html',     // Página secundaria
            },
        },
    },
});