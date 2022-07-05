import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  // ,
  // optimizeDeps: {
  //   esbuildOptions: {
  // //       // Enable esbuild polyfill plugins
  //       plugins: [
  //           NodeGlobalsPolyfillPlugin({
  //               buffer: true
  //           })
  //       ]
  //   }
  // },
  // build: {
  //   esbuildOptions: {
  //     //       // Enable esbuild polyfill plugins
  //           plugins: [
  //               NodeGlobalsPolyfillPlugin({
  //                   buffer: true
  //               })
  //           ]
  //       }
  // }
})
