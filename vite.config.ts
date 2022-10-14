import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({ fastRefresh: true, include: "**/*.tsx" })],
    server: {
        port: 3000,
        host: "localhost"
    }
})
