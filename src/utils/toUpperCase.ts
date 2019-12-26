'use strict';

import * as vscode from 'vscode';
import { xToUpperCase } from '../utilsName';

export const toUpperCaseDisposable: vscode.Disposable = vscode.commands.registerCommand(xToUpperCase, () => {
    let editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;

    if (!!editor) {
        let document: vscode.TextDocument = editor.document;
        let selection: vscode.Selection = editor.selection;
        
        let originalText: string = document.getText(selection);
        let toUpperCaseText: string = originalText.toUpperCase();

        editor.edit(editBuilder => {
            editBuilder.replace(selection, toUpperCaseText);
        });
    }
});