'use strict';

import * as vscode from 'vscode';
import { xReverse } from '../utilsName';

export const reverseDisposable: vscode.Disposable = vscode.commands.registerCommand(xReverse, ()=> {
    let editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;

    if (!!editor) {
        let document: vscode.TextDocument = editor.document;
        let selection: vscode.Selection = editor.selection;
        
        let originalText: string = document.getText(selection);
        let reversedText: string = originalText.split('').reverse().join('');

        editor.edit(editBuilder => {
            editBuilder.replace(selection, reversedText);
        });
    }
});