## Auto React Component (TypeScript)

Gere um componente React com base no nome da pasta que contém o arquivo .tsx

### Como funciona?

A extensão segue a convenção de nomenclatura `NomeDoComponente/index.tsx`. Ao digitar o prefixo no arquivo `index.tsx` é gerado automaticamente o snippet com o nome correto do componente.

#### Estrutura de Diretórios Exemplo:

```
/src
└── /components
    └── /ComponenteExemplo
        └── index.tsx
```

Em `index.tsx` digite `trce` para ativar o snippet.

#### Resultado:

O código a seguir será gerado, com o nome **ComponenteExemplo** extraído do diretório:
```
export function ComponenteExemplo() {
  return <></>;
}
```

### Instalação:

1.  Vá para a página de [**Releases**](https://github.com/luis-otavio-dias/auto-react-component/releases) do repositório.
2.  Baixe o arquivo `autoreactcomponent-0.0.1.vsix`.
3.  No seu VS Code, vá para a aba de **Extensões**.
4.  Clique nos três pontos (`...`) no canto superior direito e selecione **"Install from VSIX..."**.
5.  Escolha o arquivo `.vsix` que você baixou.

### Licença:
MIT License

### Contribuições:
Projeto desenvolvido apenas por curiosidade e para uso pessoal. No entanto, sinta-se à vontade para contribuir👊
