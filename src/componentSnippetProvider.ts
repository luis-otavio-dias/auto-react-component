import * as vscode from "vscode";
import * as path from "path";

export class ComponentSnippetProvider implements vscode.CompletionItemProvider {
  public provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
    const filePath = document.uri.fsPath;
    const baseName = path.basename(filePath);

    if (baseName !== "index.tsx") {
      return [];
    }
    const parentDir = path.dirname(filePath);
    const componentName = path.basename(parentDir);

    const blockedNames = [
      "src",
      "components",
      "templates",
      "pages",
      "layout",
      "hooks",
    ];

    if (!componentName || blockedNames.includes(componentName)) {
      return [];
    }

    const snippetPrefix = "trce";

    const snippetCompletion = new vscode.CompletionItem(
      snippetPrefix,
      vscode.CompletionItemKind.Snippet
    );

    snippetCompletion.documentation = `Generates a React component named ${componentName}`;

    const snippetBody = `export function ${componentName}() {\n    return (\n        <>$1</>\n    );\n};`;
    snippetCompletion.insertText = new vscode.SnippetString(snippetBody);

    return [snippetCompletion];
  }
}
