import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'

import autoprefixer from 'autoprefixer'
import typescript from '@rollup/plugin-typescript'

export default function createConfig() {
	return [
		{
			input: './src/index.ts',
			output: [
				{
					file: './dist/cjs/index.js',
					format: 'cjs',
					sourcemap: true,
				},
				{
					file: './dist/esm/index.js',
					format: 'esm',
					sourcemap: true,
				},
			],
			external: ['react', 'react-dom'],
			plugins: [
				external(),
				resolve(),
				commonjs(),
				postcss({
					plugins: [autoprefixer()],
				}),
				terser(),
				typescript({ tsconfig: './tsconfig.json' }),
			],
		},
		{
			input: 'dist/esm/types/index.d.ts',
			output: [{ file: 'dist/index.d.ts', format: 'esm' }],
			external: [/\.css$/],
			plugins: [dts()],
		},
	]
}
