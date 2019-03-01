import json from 'rollup-plugin-json'
import { uglify } from 'rollup-plugin-uglify'
import css from 'rollup-plugin-css-porter'
import eslint from 'rollup-plugin-eslint'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/main.js',
  output: {
    file: 'build/zupcora-sdk.min.js',
    format: 'iife',
    name: 'cora',
    sourceMap: 'inline'
  },
  plugins: [
    json(),
    css({dest: 'build/zupcora-sdk.css'}),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    eslint({
      include: [
        'src/**'
      ],
      exclude: [
        'src/assets/**',
      ]
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      plugins: [
        [
          '@babel/transform-runtime'
        ]
      ]
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'dev'),
    }),
    (process.env.NODE_ENV === 'prod' &&
      uglify({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          warnings: false
        }
      })
    ),
  ],
  watch: {
    exclude: ['node_modules/**']
  }
}