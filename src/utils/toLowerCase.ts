import * as vscode from 'vscode';
import { xToLowerCase } from '../clientStrings';

export const toLowerCaseDisposable: vscode.Disposable = vscode.commands.registerCommand(xToLowerCase, () => {
    const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;

    if (editor) {
        const document: vscode.TextDocument = editor.document;
        const selection: vscode.Selection = editor.selection;

        const originalText: string = document.getText(selection);
        const toLowerCaseText: string = originalText.toLowerCase();

        editor.edit(editBuilder => {
            editBuilder.replace(selection, toLowerCaseText);
        });
    }
});