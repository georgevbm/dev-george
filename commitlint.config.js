module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'chore',
        'fix',
        'build',
        'ci',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
      ],
    ],
    'header-case': [0],
    'subject-case': [0],
    'type-empty': [0],
    'subject-empty': [0]
  },
};
