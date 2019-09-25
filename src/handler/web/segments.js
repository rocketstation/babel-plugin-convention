import * as $ from '../../configs'
import * as _ from '../../services'

const visit = (b, c) => {
  const create = _.create(b)
  const flag = {}

  return {
    CallExpression(p, s) {
      if (Object.prototype.hasOwnProperty.call($.tag, p.node.callee.name)) {
        p.replaceWith(
          b.template(`BLACK_BOX('TAG', ARGS)`)({
            ARGS: p.node.arguments,
            BLACK_BOX: $.helper,
            TAG: $.tag[p.node.callee.name],
          }),
        )
      }
    },
    Identifier(p, s) {
      switch (true) {
        case p.node.name === $.helper && !flag.helper:
          c.root.unshiftContainer(
            'body',
            create.importDefault('@rocketstation/black-box', $.helper),
          )
          flag.helper = true
          break
      }
    },
  }
}

export default (b, c, p, s) => {
  p.traverse(visit(b, c), s)
}
