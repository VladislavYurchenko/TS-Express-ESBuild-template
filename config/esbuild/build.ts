import * as esbuild from 'esbuild'
import config from './config'

esbuild.build(config).catch(console.log);
