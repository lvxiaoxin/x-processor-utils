'use strict';

import * as vscode from 'vscode';
import { xToLowerCase } from '../utilsName';

export const toLowerCaseDisposable: vscode.Disposable = vscode.commands.registerCommand(xToLowerCase, () => {
    let editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;

    if (!!editor) {
        let document: vscode.TextDocument = editor.document;
        let selection: vscode.Selection = editor.selection;
        
        let originalText: string = document.getText(selection);
        let toLowerCaseText: string = originalText.toLowerCase();

        editor.edit(editBuilder => {
            editBuilder.replace(selection, toLowerCaseText);
        });
    }
});