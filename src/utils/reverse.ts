import * as vscode from 'vscode';
import { xReverse } from '../clientStrings';

export const reverseDisposable: vscode.Disposable = vscode.commands.registerCommand(xReverse, ()=> {
    const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;

    if (editor) {
        const document: vscode.TextDocument = editor.document;
        const selection: vscode.Selection = editor.selection;
        
        const originalText: string = document.getText(selection);
        const reversedText: string = originalText.split('').reverse().join('');

        editor.edit(editBuilder => {
            editBuilder.replace(selection, reversedText);
        });
    }
});