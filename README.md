## VS Code Eslint Setup
1. firstly install prettier extension.
2. then install eslint extension.
3. go to settings and click workspace. then top right side click Open Settings (JSON).
4. then automatic create .vscode folder. open settings.json file and write there,
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.tslint": true,
    "source.organizeImports": true
  },
  "javascript.validate.enable": false,
  "typescript.validate.enable": false
}

