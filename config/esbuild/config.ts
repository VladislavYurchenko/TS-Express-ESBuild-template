import { BuildOptions } from 'esbuild';
import { CleanPlugin } from './plugins/CleanPlugin';

const mode = process.env.MODE || 'dev';
const isProd = mode === "prod";

const config: BuildOptions = {
  outdir: 'dist',
  entryNames: 'production',
  entryPoints: ['src/index.ts'],

  bundle: true,


  tsconfig: 'config/tsconfig.json',
  platform: 'node',
  target: ['node18.12'],


  plugins: [CleanPlugin],
  minify: isProd,
  sourcemap: !isProd,
}
export default config;
