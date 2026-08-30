import { ConnectGlyph } from "./ConnectMark";

const PILLARS = [
  {
    title: "Técnica responsável",
    desc: "Serviço feito com critério e cuidado, priorizando a solução certa em vez de cobranças desnecessárias.",
  },
  {
    title: "Procedência garantida",
    desc: "Produtos e peças selecionados com origem clara, para que você compre e conserte com tranquilidade.",
  },
  {
    title: "Confiança de quem volta",
    desc: "O melhor reconhecimento da Connect é o cliente que retorna e recomenda para outra pessoa.",
  },
];

export function Reconhecimento() {
  return (
    <section id="reconhecimento" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">
              <span className="h-px w-8 bg-primary" /> Reconhecimento
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              A confiança que a comunidade constrói com a Connect
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Mais do que números, o que sustenta a Connect é a
              relação com quem já passou por aqui. Cada atendimento é tratado
              como uma oportunidade de construir confiança duradoura.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <ConnectGlyph className="h-7 w-7 text-primary" />
              <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                Connect Informática
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {PILLARS.map((p, i) => (
              <article
                key={p.title}
                className="card-hover group flex gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="font-display text-2xl font-extrabold text-primary/30 transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
