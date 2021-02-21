import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerTextEditorCommand('extension.dont-cut-empty', (editor) => {

		if (editor.selections.length === 1) {
			const activeLine = editor.document.lineAt(editor.selections[0].active);
			if (activeLine.isEmptyOrWhitespace){
				vscode.commands.executeCommand('editor.action.deleteLines');
				return;
			}
		}
		
		vscode.commands.executeCommand('editor.action.clipboardCutAction');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { } 