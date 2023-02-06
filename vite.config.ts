import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import { settings } from "./src/config/index";

export default defineConfig({
  plugins: [vue()],
  // 生产环境路径
  base: settings.base,
  resolve: {
    alias: {
      // 配置别名
      "@": path.resolve(__dirname, "src"),
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      config: path.resolve(__dirname, "src/config"),
      router: path.resolve(__dirname, "src/router"),
      tools: path.resolve(__dirname, "src/tools"),
      views: path.resolve(__dirname, "src/views"),
      plugins: path.resolve(__dirname, "src/plugins"),
      store: path.resolve(__dirname, "src/store"),
    },
  },
  build: {
    target: "modules",
    // 指定输出路径
    outDir: "dist",
    // 指定生成静态资源的存放路径
    assetsDir: "static",
    // 混淆器,terser构建后文件体积更小
    minify: "terser",
    // 输出.map文件
    sourcemap: false,
    terserOptions: {
      compress: {
        // 生产环境移除console
        drop_console: true,
        // 生产环境移除debugger
        drop_debugger: true,
      },
    },
  },
  server: {
    // 是否主动唤醒浏览器
    open: true,
    // 占用端口
    port: settings.port,
    // 是否使用https请求
    https: settings.https,
    // 扩展访问端口
    host: settings.host,
    proxy: settings.proxyFlag
      ? {
        "/api": {
          // 后台接口
          target: "http://localhost:3000",
          // 是否允许跨域
          changeOrigin: true,
          // 如果是https接口，需要配置这个参数
          // secure: false,                   
          rewrite: (path: any) => path.replace(/^\/api/, ""),
        },
      }
      : {},
  }
});
