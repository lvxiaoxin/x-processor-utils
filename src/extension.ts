'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { reverseDisposable } from './utils/reverse';
import { toLowerCaseDisposable } from './utils/toLowerCase';
import { toUpperCaseDisposable } from './utils/toUpperCase';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "x-processor-utils" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello World!');
	// });

	// -------------------- Beginning ---------------------
		
	// x cmd: xReverse --> To reverse the selections.
	context.subscriptions.push(reverseDisposable);

	// x cmd: xToLowerCase --> To lowercase the selections.
	context.subscriptions.push(toUpperCaseDisposable);
	
	// x cmd: xToUpperCase --> To uppercase the selections.
	context.subscriptions.push(toLowerCaseDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
