import * as $ from './configs'
import * as _ from './services'

import * as api from './handler/api'
import * as web from './handler/web'
import universal from './handler/universal'

const handlers = { api, web }

const parse = _.mn({ roots: $.originValues })

export default (b) => {
  return {
    name: 'Convention',
    visitor: {
      Program(p, s) {
        const location = parse(s.file.opts.filename, false)

        const c = { location, root: p }

        universal(b, c, p, s)

        const handler = handlers[location[0]]

        if (handler) {
          Object.keys(handler).some((v) => {
            if (location.includes(v)) {
              handler[v](b, c, p, s)

              return true
            }
          })
        }
      },
    },
  }
}
