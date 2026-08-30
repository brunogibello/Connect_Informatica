type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const SERVICES: Service[] = [
  {
    title: "Notebooks & Desktops",
    desc: "Venda de computadores e equipamentos selecionados, com orientação para a escolha certa.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M2 20h20M9 16l-1 4M15 16l1 4" />
      </svg>
    ),
  },
  {
    title: "Assistência Técnica",
    desc: "Manutenção e reparo de notebooks, desktops e periféricos, com diagnóstico técnico.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z" />
      </svg>
    ),
  },
  {
    title: "Impressoras",
    desc: "Manutenção, diagnóstico e reparo de impressoras para resolver falhas e manter seu equipamento funcionando.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
        <path d="M6 9V4h12v5" />
        <rect x="4" y="9" width="16" height="9" rx="2" />
        <path d="M7 18v2h10v-2M7 13h.01" />
      </svg>
    ),
  },
  {
    title: "Equipamentos para Impressão",
    desc: "Venda de impressoras e equipamentos relacionados para casa, escritório e diferentes necessidades.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
        <path d="M6 8V4h12v4" />
        <rect x="3" y="8" width="18" height="10" rx="2" />
        <path d="M7 18v2h10v-2M16 12h2" />
      </svg>
    ),
  },
  {
    title: "Redes & Wi-Fi",
    desc: "Instalação e configuração de redes, roteadores e Wi-Fi para sua casa ou empresa.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
        <path d="M5 12.5a10 10 0 0 1 14 0M8 15.5a6 6 0 0 1 8 0" />
        <circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none" />
        <path d="M2 9a15 15 0 0 1 20 0" />
      </svg>
    ),
  },
  {
    title: "Periféricos & Acessórios",
    desc: "Mouses, teclados, cabos, armazenamento e acessórios para o dia a dia.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke}>
        <rect x="6" y="3" width="12" height="18" rx="6" />
        <path d="M12 7v4" />
      </svg>
    ),
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-primary" /> Serviços
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            O que a Connect faz por você
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Da escolha do equipamento ao suporte técnico — soluções completas
            em informática, com atendimento próximo.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-card p-7 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {s.icon}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
