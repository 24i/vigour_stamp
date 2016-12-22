export default {
  entry: 'lib/index.js',
  sourceMap: true,
  targets: [
    { dest: 'dist/index.js', format: 'cjs' },
    { dest: 'dist/index.es.js', format: 'es' }
  ]
}