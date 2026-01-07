import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	resolve: {
		alias: {
			// Это связывает символ '@' с папкой 'src'
			'@': path.resolve(__dirname, './src'),
		},
	},
})
