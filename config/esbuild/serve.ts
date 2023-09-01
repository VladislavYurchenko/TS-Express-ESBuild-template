import * as esbuild from 'esbuild'

esbuild.context({
    entryPoints: ['src/index.ts'],
    platform: 'node',
    target: ['node18.12'],
    bundle: true,
    // outdir: 'dist',
    outfile: 'dist/production.js',
}).then((ctx) => {
  ctx.serve({
    servedir: 'dist',
  })
})
