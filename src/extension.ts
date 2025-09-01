import * as vscode from "vscode";
import { ComponentSnippetProvider } from "./componentSnippetProvider";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.languages.registerCompletionItemProvider(
    { scheme: "file", language: "typescriptreact" },
    new ComponentSnippetProvider()
  );

  context.subscriptions.push(disposable);
}
