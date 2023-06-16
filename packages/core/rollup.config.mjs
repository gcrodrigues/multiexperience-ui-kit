import typescript from '@rollup/plugin-typescript'
import createConfig from '../../shared/rollup.config.mjs'

export default createConfig([
	{
		input: './src/index.ts',
		plugins: [typescript({ tsconfig: './tsconfig.json' })],
	},
])
