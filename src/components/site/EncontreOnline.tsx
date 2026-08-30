import {
  connectConfig,
  hasInstagram,
  hasMercadoLivre,
} from "@/lib/connect-config";
import { ConnectGlyph } from "./ConnectMark";
import { MercadoLivreIcon, InstagramIcon } from "./icons";

/**
 * SEÇÃO — ENCONTRE A CONNECT ONLINE
 * Apresenta os canais digitais externos (Mercado Livre e Instagram).
 * Os links oficiais ficam centralizados na configuração da empresa.
 */
export function EncontreOnline() {
  return (
    <section
      id="encontre"
      className="relative overflow-hidden bg-ink py-24 text-ink-foreground"
    >
      {/* glow + marca d'água do símbolo da Connect */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 30%, transparent), transparent 70%)",
        }}
      />
      <ConnectGlyph
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 text-primary opacity-[0.06]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-primary">
            <span className="h-px w-8 bg-primary" /> Presença digital
            <span className="h-px w-8 bg-primary" />
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink-foreground sm:text-5xl">
            Continue conectado com a Connect
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Além da nossa loja física, você também pode acompanhar a Connect e
            encontrar nossos produtos e novidades online.
          </p>
        </header>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 md:gap-5">
          {/* CARD 1 — MERCADO LIVRE */}
          <OnlineCard
            icon={<MercadoLivreIcon className="h-14 w-14" />}
            title="Connect no Mercado Livre"
            text="Encontre nossos produtos também no Mercado Livre. Acesse nossa página oficial e confira os produtos disponíveis."
            buttonLabel="Visitar nossa loja no Mercado Livre"
            href={connectConfig.mercadoLivreUrl}
            ready={hasMercadoLivre()}
            platformName="Mercado Livre"
          />

          {/* CARD 2 — INSTAGRAM */}
          <OnlineCard
            icon={<InstagramIcon className="h-14 w-14" />}
            title="Siga a Connect no Instagram"
            text="Acompanhe nossas novidades, produtos, serviços, dicas de informática e conteúdos da Connect."
            buttonLabel="Seguir no Instagram"
            href={connectConfig.instagramUrl}
            ready={hasInstagram()}
            platformName="Instagram"
            handle={connectConfig.instagramHandle}
          />
        </div>

        <p className="mt-8 text-center text-sm text-ink-muted">
          A Connect no Mercado Livre funciona como canal externo de vendas —
          este site permanece exclusivamente institucional.
        </p>
      </div>
    </section>
  );
}

function OnlineCard({
  icon,
  title,
  text,
  buttonLabel,
  href,
  ready,
  platformName,
  handle,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  buttonLabel: string;
  href: string;
  ready: boolean;
  platformName: string;
  handle?: string;
}) {
  return (
    <article className="card-hover group relative flex flex-col overflow-hidden rounded-3xl border border-ink-border bg-ink-foreground/[0.03] p-8 transition-all hover:-translate-y-1 hover:border-primary/50 hover:bg-ink-foreground/[0.06] hover:shadow-2xl hover:shadow-primary/10">
      {/* faixa laranja superior */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
      />

      <div className="flex items-center justify-between gap-4">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-foreground/95 p-1 shadow-lg transition-transform duration-300 group-hover:scale-105">
          {icon}
        </div>
        <span className="rounded-full border border-ink-border px-3 py-1 font-display text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
          {platformName}
        </span>
      </div>

      <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink-foreground">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-ink-muted">
        {text}
      </p>

      {handle ? (
        <p className="mt-4 font-display text-sm font-semibold text-primary">
          {handle}
        </p>
      ) : null}

      <div className="mt-7">
        {ready ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
          >
            {buttonLabel}
            <span aria-hidden>→</span>
          </a>
        ) : (
          <div className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-dashed border-ink-border px-6 py-3.5 text-sm font-semibold text-ink-muted sm:w-auto">
            <span className="h-2 w-2 rounded-full bg-primary/70" />
            {buttonLabel} — em breve
          </div>
        )}
      </div>
    </article>
  );
}
