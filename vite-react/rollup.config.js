import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
	input: 'server/server.mjs',
	output: {
		file: 'dist/server.bundle.cjs',
		format: 'cjs'
	},
	plugins:  [ commonjs(), nodeResolve(), json(), terser() ]
};