import * as vscode from 'vscode';
import * as _ from 'lodash';

import { xAddInLinesEnding, errorMessage, addInLinesEndingPlaceHolder } from '../clientStrings';

async function handleCustomerInput(): Promise<string> {
    const userInput: string | undefined = await vscode.window.showInputBox({ placeHolder: addInLinesEndingPlaceHolder});
    return _.isUndefined(userInput) ? Promise.resolve('') : Promise.resolve(userInput);
}

export const addInLinesEndingDisposable: vscode.Disposable = vscode.commands.registerCommand(xAddInLinesEnding, () => {
    const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;

    if (editor) {
        handleCustomerInput().then((input: string) => {
            const userInput: string = input;
            const document: vscode.TextDocument = editor.document;
            const selection: vscode.Selection = editor.selection;

            const oldText: string = document.getText(selection);
            let lines: string[] = oldText.split('\n');

            let convertedLines: string[] = lines.map(line => line.replace('\r', '') + userInput);
            const convertedText: string = convertedLines.join('\n');

            editor.edit(editBuilder => {
                editBuilder.replace(selection, convertedText);
            });
        }).catch(() => {
            vscode.window.showErrorMessage(errorMessage + xAddInLinesEnding.split('.')[1]);
        });
    }
});