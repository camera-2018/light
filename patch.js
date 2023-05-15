import fs from 'node:fs'
import path from 'node:path'

function patchPkg(name, data) {
  const pkgPath = path.resolve('node_modules', name, 'package.json')

  const pkg = JSON.parse(fs.readFileSync(pkgPath))
  const patchedPkg = {
    ...pkg,
    ...data,
  }

  fs.writeFileSync(pkgPath, JSON.stringify(patchedPkg, null, 2))
}

patchPkg('echarts', {
  type: 'module',
  exports: {
    '.': {
      require: './dist/echarts.js',
      import: './dist/echarts.esm.js',
      types: './index.d.ts',
    },
    './core': {
      require: './core.js',
      import: './core.js',
      types: './core.d.ts',
    },
    './renderers': {
      require: './renderers.js',
      import: './renderers.js',
      types: './renderers.d.ts',
    },
    './charts': {
      require: './charts.js',
      import: './charts.js',
      types: './charts.d.ts',
    },
    './components': {
      require: './components.js',
      import: './components.js',
      types: './components.d.ts',
    },
  },
})

patchPkg('zrender', {
  type: 'module',
})

patchPkg('resize-detector', {
  type: 'module',
  exports: {
    '.': {
      require: './dist/index.js',
      import: './esm/index.js',
    },
  },
})

patchPkg('vue-echarts', {
  type: 'module',
  exports: {
    '.': {
      require: './dist/index.cjs.js',
      import: './dist/index.esm.js',
      types: './dist/index.d.ts',
    },
  },
})
