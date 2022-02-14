# eslint-config-kimbiyam-react

[![npm version](https://badge.fury.io/js/eslint-config-kimbiyam-react.svg)](https://badge.fury.io/js/eslint-config-kimbiyam-react)


ESLint configurations based on [airbnb rules](https://github.com/airbnb/javascript)

## Installation

Install `eslint-config-kimbiyam-react` with peer dependencies


### Check and install peer dependencies
```bash
$ npm info eslint-config-kimbiyam-react peerDependencies
```

### npm 5+
if using npm 5+, can install with install-peerdeps

```bash
$ npx install-peerdeps --dev eslint-config-kimbiyam-react
```

## Getting started

### JavaScript
```json
{
  "extends": [
    "eslint-config-kimbiyam-react",
  ],
}
```

### TypeScript
```json
{
  "extends": [
    "eslint-config-kimbiyam-react",
    "eslint-config-kimbiyam-react/typescript",
  ],
}
```

### With Prettier
```json
{
  "extends": [
    "eslint-config-kimbiyam-react",
    "eslint-config-kimbiyam-react/prettier",
  ],
}
```