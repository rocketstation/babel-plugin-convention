import cc from '@rocketstation/change-case'
import mn from '@rocketstation/meta-name'

export const create = ({ types: t }) => {
  return {
    importDefault(source, name) {
      return t.importDeclaration(
        [t.importDefaultSpecifier(t.Identifier(name))],
        t.StringLiteral(source),
      )
    },
  }
}

export { cc, mn }
