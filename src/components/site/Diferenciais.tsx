const ITEMS = [
  {
    title: "Atendimento técnico especializado",
    desc: "Quem atende entende do assunto. Diagnóstico claro e orientação honesta antes de qualquer serviço.",
  },
  {
    title: "Produtos com procedência",
    desc: "Equipamentos e acessórios selecionados com critério, com procedência e garantia.",
  },
  {
    title: "Orçamento sem compromisso",
    desc: "Você sabe o custo antes de decidir. Transparência total, do diagnóstico ao valor final.",
  },
  {
    title: "Suporte pós-venda",
    desc: "O relacionamento não termina na entrega. Acompanhamos você depois da compra e do reparo.",
  },
  {
    title: "Soluções sob medida",
    desc: "Recomendamos o que faz sentido para o seu uso — não apenas o que custa mais.",
  },
  {
    title: "Confiança da comunidade",
    desc: "Clientes que voltam e indicam. Esse é o reconhecimento que importa para a Connect.",
  },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-primary" /> Diferenciais
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Por que escolher a Connect
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mais do que vender e consertar: a Connect constrói uma relação de
            confiança que dura.
          </p>
        </header>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="group relative bg-background p-7 transition-colors hover:bg-accent/40"
            >
              <span className="font-display text-sm font-bold text-primary/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-0.5 origin-top scale-y-0 bg-primary transition-transform duration-300 group-hover:scale-y-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
