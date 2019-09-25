import fs from 'fs'
import path from 'path'

import tester from 'babel-plugin-tester'

import plugin from './index'

const FIXTURES = 'fixtures'
const IN = 'in'
const OUT = 'out'

const walk = (folder = '') => {
  const dir = path.resolve(__dirname, '..', FIXTURES, IN, folder)

  return fs.readdirSync(dir).reduce((r, v) => {
    const dirNext = path.join(folder, v)

    if (fs.lstatSync(path.join(dir, v)).isDirectory()) {
      return [].concat(r, walk(dirNext))
    }

    if (path.extname(v) === '.js') r.push(dirNext)

    return r
  }, [])
}

tester({
  babelOptions: { configFile: false },
  filename: __dirname,
  plugin,
  tests: walk().map((v) => {
    return {
      fixture: path.join(FIXTURES, IN, v),
      outputFixture: path.join(FIXTURES, OUT, v),
      title: v,
    }
  }),
})
