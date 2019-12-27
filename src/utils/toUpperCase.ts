'use strict';

import * as vscode from 'vscode';
import { xToUpperCase } from '../utilsName';

export const toUpperCaseDisposable: vscode.Disposable = vscode.commands.registerCommand(xToUpperCase, () => {
    const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;

    if (editor) {
        const document: vscode.TextDocument = editor.document;
        const selection: vscode.Selection = editor.selection;
        
        const originalText: string = document.getText(selection);
        const toUpperCaseText: string = originalText.toUpperCase();

        editor.edit(editBuilder => {
            editBuilder.replace(selection, toUpperCaseText);
        });
    }
});