import * as $ from '../configs'
import * as _ from '../services'

const parse = _.mn({
  filters: $.moduleValues,
  roots: $.originValues,
  template: ['dir'],
})

const visit = (b, c, p, s) => {
  return {
    Identifier(p, s) {
      if (p.node.name === 'ID') {
        p.replaceWithSourceString(
          JSON.stringify(parse(s.file.opts.filename, 'k')),
        )
      }
    },
  }
}

export default (b, c, p, s) => {
  p.traverse(visit(b, c), s)
}
