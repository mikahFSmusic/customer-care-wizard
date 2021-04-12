const path = require('path');

module.exports = {
  extends: [
    'plugin:i18n-json/recommended',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'eslint-config-prettier',
    'eslint-config-prettier/@typescript-eslint',
  ],
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    extraFileExtensions: ['.json'],
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
    'jest',
    'i18next',
    'm6web-i18n',
  ],
  ignorePatterns: ['*.(test|d).ts', '*.js'],
  rules: {
    'i18n-json/identical-keys': [
      2,
      {
        filePath: {
          'appSumo.json': path.resolve(
            './client/public/locales/ja/appSumo.json',
          ),
          'auth.json': path.resolve('client/public/locales/ja/auth.json'),
          'common.json': path.resolve('client/public/locales/ja/common.json'),
          'company.json': path.resolve('client/public/locales/ja/company.json'),
          'compatibility.json': path.resolve(
            'client/public/locales/ja/compatibility.json',
          ),
          'conversation.json': path.resolve(
            'client/public/locales/ja/conversation.json',
          ),
          'customFloorPlan.json': path.resolve(
            'client/public/locales/ja/customFloorPlan.json',
          ),
          'errorPage.json': path.resolve(
            'client/public/locales/ja/errorPage.json',
          ),
          'event.json': path.resolve('client/public/locales/ja/event.json'),
          'eventAgenda.json': path.resolve(
            'client/public/locales/ja/eventAgenda.json',
          ),
          'eventForm.json': path.resolve(
            'client/public/locales/ja/eventForm.json',
          ),
          'eventLanding.json': path.resolve(
            'client/public/locales/ja/eventLanding.json',
          ),
          'manageEvent.json': path.resolve(
            'client/public/locales/ja/manageEvent.json',
          ),
          'menu.json': path.resolve('client/public/locales/ja/menu.json'),
          'micCamCheck.json': path.resolve(
            'client/public/locales/ja/micCamCheck.json',
          ),
          'onboarding.json': path.resolve(
            'client/public/locales/ja/onboarding.json',
          ),
          'profile.json': path.resolve('client/public/locales/ja/profile.json'),
          'runOfShow.json': path.resolve(
            'client/public/locales/ja/runOfShow.json',
          ),
          'settings.json': path.resolve(
            'client/public/locales/ja/settings.json',
          ),
          'template.json': path.resolve(
            'client/public/locales/ja/template.json',
          ),
          'theater.json': path.resolve('client/public/locales/ja/theater.json'),
          'virtualCamera.json': path.resolve(
            'client/public/locales/ja/virtualCamera.json',
          ),
          'server.json': path.resolve('client/public/locales/ja/server.json'),
        },
      },
    ],
    'i18n-json/valid-message-syntax': [0],
    'i18next/no-literal-string': [
      2,
      {
        markupOnly: true,
        ignoreAttribute: [
          'name',
          'message',
          'variant',
          'placement',
          'aria-labelledby',
          'aria-describedby',
          'htmlFor',
          'index',
          'color',
          'data-testid',
          'target',
          'href',
          'streamType',
          'autoComplete',
          'axis',
          'justifyContent',
          'display',
          'copyLinkId',
          'closeButtonLink',
          'margin',
          'labelId',
          'dataKey',
          'defaultValue',
          'value',
          'to',
          'selectedDeviceId',
          'text',
          'url',
          'position',
          'role',
          'defaultUrl',
          'path',
          'authURL',
          'component',
          'gutterBottom',
          'noWrap',
          'paragraph',
          'variantMapping',
          'maxWidth',
          'scroll',
          'edge',
          'size',
          'fontSize',
          'justify',
          'align',
          'anchorReference',
          'anchorPosition',
          'container',
          'elevation',
          'direction',
          'orientation',
          'indicatorColor',
          'textColor',
          'direction',
          'labelPlacement',
          'inputVariant',
          'alignItems',
          'mouseEvent',
          'timeout',
          'aria-label',
          'aria-controls',
          'aria-haspopup',
          'theme',
          'marginBottom',
          'autoDismiss',
          'alt',
          'maxFileSize',
        ],
      },
    ],
    'm6web-i18n/no-unknown-key': 2,
    'prettier/prettier': 2,
    strict: ['error', 'never'],
    'max-len': [
      2,
      120,
      4,
      {
        ignoreUrls: true,
      },
    ],
    'max-lines': [
      'warn',
      {
        max: 350,
        skipComments: true,
      },
    ],
    semi: 0,
    // https://github.com/benmosher/eslint-plugin-import/issues/1446
    // 0 = off, 1 = warn, 2 = error
    'import/named': 0,
    'import/extensions': 0,
    'linebreak-style': 0,
    'max-len': ['error', 165], // increase max length by 15 after unify
    'react/jsx-curly-brace-presence': [1, 'never'],
    quotes: 0,
    '@typescript-eslint/quotes': [
      2,
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'react/no-unescaped-entities': 0,
    'jsx-a11y/anchor-is-valid': 1,
    'react/prop-types': 0,
    'arrow-body-style': 0,
    'eol-last': 0,
    'no-trailing-spaces': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-var-requires': 1, // not critical
    'import/prefer-default-export': 0,
    'no-restricted-globals': 1,
    'react/require-default-props': 0,
    'no-restricted-syntax': 1, // preventing usage of for..in loops
    'no-param-reassign': 1, // just to pay attention what you are doing
    'jsx-a11y/alt-text': 0,
    'consistent-return': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'import/order': 0,
    'react/jsx-props-no-spreading': 0,
    'react/button-has-type': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/accessible-emoji': 0,
    'no-plusplus': 0,
    'newline-before-return': 1,
    'max-classes-per-file': 0,
    'class-methods-use-this': 0,
    '@typescript-eslint/no-implied-eval': 2,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/indent': 0, // https://github.com/typescript-eslint/typescript-eslint/issues/1824
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: 'let', next: '*' },
      { blankLine: 'never', prev: 'let', next: 'let' },
      { blankLine: 'any', prev: 'let', next: 'const' },
      { blankLine: 'always', prev: 'const', next: '*' },
      { blankLine: 'any', prev: 'const', next: 'const' },
      { blankLine: 'any', prev: 'const', next: 'let' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: '*', next: 'for' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'never', prev: 'import', next: 'import' },
    ],
    'react-hooks/exhaustive-deps': 0, // need to pay attention, blind following the rule will break the logic
    radix: 0,
    'jest/no-export': 1,
    'no-case-declarations': 1,
    'default-case': 1,
    'no-prototype-builtins': 0,
    'no-underscore-dangle': [2, { allow: ['_id'], allowAfterThis: true }], // use only for mongo _id
    '@typescript-eslint/naming-convention': [
      // For interfaces
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/iframe-has-title': 0,
    'no-lonely-if': 0,
    'jsx-a11y/mouse-events-have-key-events': 1, // review,
    'jest/no-done-callback': 1, // waiting for decision
    // below rules added after unify eslint
    'prefer-destructuring': 1, // Use object destructuring
    'no-return-await': 1, // Redundant use of `await` on a return value
    'no-unneeded-ternary': 1, // Unnecessary use of conditional expression for default assignment
    '@typescript-eslint/no-shadow': 1, // Avoid calling `expect` conditionally
    'jest/no-conditional-expect': 1,
    'jest/no-try-expect': 1,
    'jest/no-identical-title': 1,
    'object-shorthand': 1,
    '@typescript-eslint/quotes': 1,
    'prefer-const': 1,
    'import/no-duplicates': 1,
    'array-callback-return': 1,
    'no-nested-ternary': 1,
    'no-console': 0,
    'one-var': 1,
    'import/first': 1,
    'import/newline-after-import': 1,
    'no-await-in-loop': 1,
    'no-else-return': 1,
    'no-useless-return': 1,
    'prefer-promise-reject-errors': 1,
    'prefer-template': 1,
    'jest/no-standalone-expect': 1,
    'jest/valid-title': 1,
    '@typescript-eslint/no-loop-func': 1,
    '@typescript-eslint/no-inferrable-types': 1,
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/lines-between-class-members': 1,
    '@typescript-eslint/dot-notation': 1,
    'operator-assignment': 1,
    'import/no-useless-path-segments': 1,
    'prefer-object-spread': 1,
    'global-require': 1,
  },
  settings: {
    // TODO: Fix Json missing key linter
    // i18n: {
    //   // principal language used in 'no-unknown-key' rule
    //   principalLangs: [
    //     {
    //       name: 'appSumo',
    //       translationPath: './client/public/locales/en/appSumo.json',
    //     },
    //     {
    //       name: 'auth',
    //       translationPath: './client/public/locales/en/auth.json',
    //     },
    //     {
    //       name: 'common',
    //       translationPath: './client/public/locales/en/common.json',
    //     },
    //     {
    //       name: 'company',
    //       translationPath: './client/public/locales/en/company.json',
    //     },
    //     {
    //       name: 'compatibility',
    //       translationPath: './client/public/locales/en/compatibility.json',
    //     },
    //     {
    //       name: 'conversation',
    //       translationPath: './client/public/locales/en/conversation.json',
    //     },
    //     {
    //       name: 'customFloorPlan',
    //       translationPath: './client/public/locales/en/customFloorPlan.json',
    //     },
    //     {
    //       name: 'errorPage',
    //       translationPath: './client/public/locales/en/errorPage.json',
    //     },
    //     {
    //       name: 'event',
    //       translationPath: './client/public/locales/en/event.json',
    //     },
    //     {
    //       name: 'eventAgenda',
    //       translationPath: './client/public/locales/en/eventAgenda.json',
    //     },
    //     {
    //       name: 'eventForm',
    //       translationPath: './client/public/locales/en/eventForm.json',
    //     },
    //     {
    //       name: 'eventLanding',
    //       translationPath: './client/public/locales/en/eventLanding.json',
    //     },
    //     {
    //       name: 'manageEvent',
    //       translationPath: './client/public/locales/en/manageEvent.json',
    //     },
    //     {
    //       name: 'menu',
    //       translationPath: './client/public/locales/en/menu.json',
    //     },
    //     {
    //       name: 'micCamCheck',
    //       translationPath: './client/public/locales/en/micCamCheck.json',
    //     },
    //     {
    //       name: 'onboarding',
    //       translationPath: './client/public/locales/en/onboarding.json',
    //     },
    //     {
    //       name: 'profile',
    //       translationPath: './client/public/locales/en/profile.json',
    //     },
    //     {
    //       name: 'runOfShow',
    //       translationPath: './client/public/locales/en/runOfShow.json',
    //     },
    //     {
    //       name: 'server',
    //       translationPath: './client/public/locales/en/server.json',
    //     },
    //     {
    //       name: 'settings',
    //       translationPath: './client/public/locales/en/settings.json',
    //     },
    //     {
    //       name: 'template',
    //       translationPath: './client/public/locales/en/template.json',
    //     },
    //     {
    //       name: 'theater',
    //       translationPath: './client/public/locales/en/theater.json',
    //     },
    //     {
    //       name: 'virtualCamera',
    //       translationPath: './client/public/locales/en/virtualCamera.json',
    //     },
    //   ],
    //   // Name of your translate function
    //   functionName: 't',
    // },
    'import/resolver': 'node',
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
  overrides: [
    {
      files: ['client/src/**/*.{ts,tsx}'],
      rules: {
        'no-console': 1,
      },
      parserOptions: {
        project: './client/tsconfig.json',
      },
    },
    {
      files: ['server/{src,scripts}/**/*.ts'],
      parserOptions: {
        project: './server/tsconfig.json',
      },
    },
    {
      files: ['./client/public/locales/**/*.json'],
      rules: { 'no-console': 1, 'max-len': 0, 'prettier/prettier': 0 },
      parserOptions: {
        project: './client/tsconfig.json',
      },
    },
    {
      files: ['cypress/**/*.ts'],
      rules: {
        'jest/valid-expect-in-promise': 0,
        'jest/expect-expect': 0,
        'jest/no-standalone-expect': 0,
        'jest/valid-expect': 0,
      },
      parserOptions: {
        project: './cypress/tsconfig.json',
      },
    },
    {
      files: ['cloud-functions/functions/src/**/*.ts'],
      rules: {
        'jest/valid-expect-in-promise': 0,
        'jest/expect-expect': 0,
        'jest/no-standalone-expect': 0,
        'jest/valid-expect': 0,
      },
      parserOptions: {
        project: './cloud-functions/functions/tsconfig.json',
      },
    },
    {
      files: ['secrets-rotation/{src,scripts}/**/*.ts'],
      parserOptions: {
        project: './secrets-rotation/tsconfig.json',
      },
    },
  ],
};
