# Rotas (explicação)

O sistema de roteamento usado neste projeto mapeia arquivos `.tsx` em `src/routes/`
para URLs. Cada arquivo define a lógica e o layout de uma rota. O arquivo
`src/routes/__root.tsx` contém o shell da aplicação que envolve todas as páginas.

Principais convenções
- `index.tsx` → página inicial `/`.
- Arquivos com nomes estáticos mapeiam para a rota com o mesmo nome (`about.tsx` → `/about`).
- Segmentos dinâmicos usam `$` (por exemplo `users/$id.tsx` torna `:id` disponível como parâmetro).
- Layouts locais podem ser criados com `_layout.tsx` e controlam seções da árvore de rotas.

O arquivo `routeTree.gen.ts` é gerado automaticamente pela ferramenta de roteamento e descreve a árvore de rotas compilada; altere componentes de rota, não esse arquivo gerado.
