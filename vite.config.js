import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/Ecommerce-front-AluraGeek/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        addproduct: resolve(__dirname, 'addproduct.html'),
        tudo: resolve(__dirname, 'tudo.html'),
        productos: resolve(__dirname, 'productos.html'),
        productdetails: resolve(__dirname, 'productdetails.html'),
        search: resolve(__dirname, 'search.html'),
      },
    },
  },
})