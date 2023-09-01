import * as esbuild from 'esbuild'
import config from './config';

esbuild.context(config).then((ctx) => {
  ctx.watch();
})
