const fs = require('fs');

const isAmendCommit = () => {
  try {
    const gitHeadPath = '.git/COMMIT_EDITMSG';
    return (
      fs.existsSync(gitHeadPath) &&
      fs.readFileSync(gitHeadPath, 'utf8').length > 0
    );
  } catch (error) {
    return false;
  }
};

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
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
  },
  defaultIgnores: true,
  plugins: [
    {
      rules: {
        'type-empty': () => {
          if (isAmendCommit()) {
            return [true];
          }
          return [false, 'type may not be empty'];
        },
        'subject-empty': () => {
          if (isAmendCommit()) {
            return [true];
          }
          return [false, 'subject may not be empty'];
        },
      },
    },
  ],
};
