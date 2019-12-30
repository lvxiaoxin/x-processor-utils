'use strict';

import * as vscode from 'vscode';
import { xAddCommaInLinesEnding } from '../utilsName';

export const addCommaInLinesEndingDisposable: vscode.Disposable = vscode.commands.registerCommand(xAddCommaInLinesEnding, () => {
    const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;

    if (editor) {
        const document: vscode.TextDocument = editor.document;
        const selection: vscode.Selection = editor.selection;

        const originalText: string = document.getText(selection);
        let lines: string[] = originalText.split('\n');

        let convertedLines: string[] = lines.map(line => line.replace('\r', '') + ',');

        const convertedText: string = convertedLines.join('\n');

        editor.edit(editBuilder => {
            editBuilder.replace(selection, convertedText);
        });
    }
});