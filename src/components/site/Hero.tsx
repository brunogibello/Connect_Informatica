import { ConnectGlyph } from "./ConnectMark";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink text-ink-foreground"
    >
      {/* glow + grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ink-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink-foreground) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 38%, transparent), transparent 70%)",
        }}
      />
      <ConnectGlyph
        className="pointer-events-none absolute -right-24 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 text-primary opacity-[0.07]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-36 sm:pt-44">
        <p className="eyebrow text-primary">
          <span className="h-px w-8 bg-primary" /> Tecnologia e soluções completas
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl md:text-7xl">
          Tecnologia que conecta
          <br />
          a sua vida à{" "}
          <span className="text-primary">Connect Informática</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
          Venda de equipamentos, computadores, impressoras e acessórios, além de
          assistência técnica para informática e manutenção de impressoras — na
          loja física e também online.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#servicos"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
          >
            Conhecer serviços
          </a>
          <a
            href="#encontre"
            className="inline-flex items-center justify-center rounded-full border border-ink-border px-7 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/5"
          >
            Encontrar a Connect online →
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-ink-border pt-8 sm:grid-cols-4">
          {[
            ["Loja física", "Atendimento presencial"],
            ["Assistência", "Técnica especializada"],
            ["Produtos", "Com procedência"],
            ["Online", "Mercado Livre & Instagram"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-display text-sm font-bold text-ink-foreground">
                {k}
              </dt>
              <dd className="mt-1 text-sm text-ink-muted">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
