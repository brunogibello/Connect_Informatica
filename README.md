## Sobre este projeto

Este repositório contém a implementação do site institucional da *Connect Informática*. Abaixo há uma visão geral dos principais diretórios e arquivos e uma breve explicação do papel de cada um.

Estrutura principal
- `src/` — código-fonte da aplicação React/TypeScript.
	- `src/lib/connect-config.ts` — arquivo central com os dados da loja (nome, telefone, endereço, URLs de redes sociais). Use esse arquivo para atualizar informações da empresa em um único lugar.
	- `src/components/site/` — componentes específicos do site (Header, Footer, Hero, Contato, Localizacao, ícones, etc.). Cada componente representa uma seção reutilizável do site.
	- `src/components/ui/` — biblioteca de componentes de UI (botões, formulários, diálogos) usada pelo site.
	- `src/routes/` — rotas da aplicação; cada arquivo `.tsx` aqui mapeia para uma rota de página.
	- `src/styles.css` — estilos globais e variáveis do tema.

Pasta pública
- `public/` — recursos estáticos servidos diretamente (favicon, imagens, etc.). Imagens ou SVGs colocados aqui ficam disponíveis em `/<nome-do-arquivo>`.

Servidor e inicialização
- `src/server.ts` e `src/start.ts` — pontos de entrada para o servidor (SSR/preview) quando o site é executado localmente.

Como rodar localmente
1. Instale as dependências: `npm install`.
2. Inicie o servidor de desenvolvimento: `npm run dev`.

Notas sobre manutenção e documentação
- Os dados da empresa ficam em `src/lib/connect-config.ts` — atualizar ali atualiza todo o site.
- Rotas estão em `src/routes/` e o arquivo `routeTree.gen.ts` é gerado automaticamente pela ferramenta de roteamento; não é necessário editá-lo manualmente.
- Se quiser que eu procure arquivos não referenciados e proponha remoções seguras, posso gerar uma lista e compartilhar antes de excluir qualquer coisa. Quer que eu faça essa varredura?

Tech stack resumida: TypeScript, React, Tailwind CSS, TanStack Start.
