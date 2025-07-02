import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		host: true,
		port: 5173,
		strictPort: true,
		hmr: {
			clientPort: 443,
		},
		allowedHosts: [".ngrok-free.app"],
	},
	test: {
		globals: true,
		environment: "jsdom",
	},
});
