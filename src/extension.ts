'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { reverseDisposable } from './utils/reverse';
import { toLowerCaseDisposable } from './utils/toLowerCase';
import { toUpperCaseDisposable } from './utils/toUpperCase';
import { addCommaInLinesEndingDisposable } from './utils/addCommaInLines';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {

	// x cmd: xReverse --> To reverse the selections.
	context.subscriptions.push(reverseDisposable);

	// x cmd: xToLowerCase --> To lowercase the selections.
	context.subscriptions.push(toUpperCaseDisposable);

	// x cmd: xToUpperCase --> To uppercase the selections.
	context.subscriptions.push(toLowerCaseDisposable);

	// x cmd: xAddCommaInLinesEnding --> To add comma in the ending of every lines.
	context.subscriptions.push(addCommaInLinesEndingDisposable);
}

// this method is called when your extension is deactivated
export function deactivate(): void { }
