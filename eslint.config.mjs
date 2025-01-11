import {FlatCompat} from '@eslint/eslintrc'
import js from '@eslint/js'
import {dirname} from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  // https://nextjs.org/docs/app/api-reference/config/eslint#additional-configurations
  recommendedConfig: js.configs.recommended
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals'],
    plugins: [
      '@stylistic/js',
      '@stylistic/jsx'
    ],
    rules: {
      '@stylistic/js/indent': [1, 2],
      '@stylistic/js/semi': [1, 'never'],
      '@stylistic/js/max-len': [1, {
        'code': 80,
        'ignoreComments': true,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignorePattern': '^import .*'
      }],
      '@stylistic/js/arrow-spacing': [1],
      '@stylistic/js/array-bracket-spacing': [1, 'never'],
      '@stylistic/js/block-spacing': [1],
      '@stylistic/js/comma-spacing': [1],
      '@stylistic/js/key-spacing': [1],
      '@stylistic/js/no-multi-spaces': [1],
      '@stylistic/js/keyword-spacing': [1],
      '@stylistic/js/computed-property-spacing': [1],
      '@stylistic/js/eol-last': [1, 'always'],
      '@stylistic/js/quotes': [1, 'single'],
      '@stylistic/js/space-in-parens': [1],
      '@stylistic/js/jsx-quotes': [1, 'prefer-single'],
      '@stylistic/js/comma-dangle': [1, 'never'],
      '@stylistic/js/no-multiple-empty-lines': [1, {'max': 1}],
      '@stylistic/js/no-trailing-spaces': [1],
      '@stylistic/js/object-curly-spacing': [1],
      '@stylistic/js/rest-spread-spacing': [1],
      '@stylistic/js/space-infix-ops': [1],
      '@stylistic/js/switch-colon-spacing': [1],
      '@stylistic/js/template-curly-spacing': [1],
      'sort-imports': [1, {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false,
        'allowSeparatedGroups': false
      }],
      '@stylistic/js/dot-location': [1, 'property'],
      '@stylistic/js/function-call-spacing': [1, 'never'],
      '@stylistic/js/space-before-blocks': [1, 'always'],
      '@stylistic/jsx/jsx-indent-props': [1, 2],
      '@stylistic/jsx/jsx-curly-spacing': [1],
      '@stylistic/jsx/jsx-equals-spacing': [1],
      '@stylistic/jsx/jsx-props-no-multi-spaces': [1],
      '@stylistic/jsx/jsx-tag-spacing': [1, {
        'beforeClosing': 'never'
      }],
      '@stylistic/jsx/jsx-closing-bracket-location': [1, 'after-props'],
      '@stylistic/jsx/jsx-curly-newline': [1]
    }
  })
]

export default eslintConfig
