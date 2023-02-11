import react from "@vitejs/plugin-react"
import { visualizer } from "rollup-plugin-visualizer"
import { defineConfig, splitVendorChunkPlugin, type PluginOption } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({ fastRefresh: true, include: "**/*.tsx" }),
        visualizer() as PluginOption,
        splitVendorChunkPlugin()
    ],
    server: {
        port: 3000,
        host: "localhost"
    },
    base: "/horde-control-tower/"
})
