# Eslint, TypeScript, and Prettier Setup

These are my Eslint, TypeScript, and Prettier settings that I use in React.js projects.

## Usage

1.Install peer dependencies:

```bash
npx install-peerdeps --dev @andrewgeorgemitchell/eslint-config
```

2.Tell your project to use @andrewgeorgemitchell/eslint-config. For that,

- in `package.json` add or edit (if already exists) `eslintConfig` field:

```json
"eslintConfig": {
    "extends": [
      "@andrewgeorgemitchell/eslint-config"
    ]
  }
```

- OR create `.eslintrc` file with the following content:

```json
{
  "extends": ["@andrewgeorgemitchell/eslint-config"]
}
```

3.To lint your code run:

```bash
npx eslint .
```

OR if you'd like fixable errors to be fixed automatically, run:

```bash
npx eslint . --fix
```

**NOTE:** This config works only for TypeScript projects, e.g., your project must include `.tsconfig.json` file. If it doesn't, you can easily initialize it by running:

```bash
npx tsc --init
```

## How To Override Default Config

Add your custom ESLint or Prettier rules directly in `.eslintrc` or `package.json` file under `"rules"` (for ESLint) or `"prettier/prettier"` (for Prettier) field:

```json
{
  "extends": ["@andrewgeorgemitchell/eslint-config"],
  "rules": {
    "@typescript-eslint/ban-ts-comment": "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ]
  }
}
```

## Integration with VSCode

1. Uninstall or disable any previously installed prettier extensions.

2. Install (if haven't already) [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

3. Edit VSCode settings by pressing CMD + SHIFT + P on Mac (or Ctrl + SHIFT + P on Windows), type `settings` and choose `Preferences: Open Settings (JSON)`. Edit or add the following settings:

```json
// Format a file on save
"editor.formatOnSave": true,
// show eslint icon at bottom toolbar
"eslint.alwaysShowStatus": true,
// turns on Auto Fix for all providers including ESLint
"editor.codeActionsOnSave": {
  "source.fixAll": true
}
```

Remove `"editor.defaultFormatter": "esbenp.prettier-vscode"` line if you had it before.
