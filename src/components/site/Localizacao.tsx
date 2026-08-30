import { connectConfig } from "@/lib/connect-config";

export function Localizacao() {
  const hasAddress = Boolean(
    connectConfig.addressLine1.trim() || connectConfig.mapsQuery.trim(),
  );
  const mapsQuery = connectConfig.mapsQuery.trim() || connectConfig.addressLine1.trim();

  return (
    <section id="localizacao" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-primary" /> Localização
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Onde encontrar a Connect
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Visite nossa loja física em Severínia e conte com atendimento de segunda a sexta-feira.
          </p>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          {/* Mapa */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card lg:aspect-auto lg:min-h-[24rem]">
            {hasAddress && mapsQuery ? (
              <iframe
                title="Mapa da Connect Informática"
                src={`https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <p className="text-sm text-muted-foreground">
                  Mapa exibido assim que o endereço for configurado.
                </p>
              </div>
            )}
          </div>

          {/* Endereço */}
          <div className="flex flex-col justify-center gap-5 rounded-3xl border border-border bg-card p-8">
            <div>
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary/80">
                Endereço
              </span>
              <p className="mt-2 font-display text-lg font-semibold text-foreground">
                <span className="inline-block rounded-md bg-card px-3 py-1">{connectConfig.addressLine1.trim() || "A definir"}</span>
              </p>
              {connectConfig.addressLine2.trim() && (
                <p className="text-sm text-muted-foreground">
                  <span className="inline-block rounded-md bg-card px-3 py-1">{connectConfig.addressLine2}</span>
                </p>
              )}
              <p className="text-sm text-muted-foreground">
                <span className="inline-block rounded-md bg-card px-3 py-1">{connectConfig.cityRegion.trim() || "A definir"}</span>
              </p>
            </div>
            <div className="h-px bg-border" />
            <div>
              <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary/80">
                Horário de atendimento
              </span>
              <p className="mt-2 text-sm text-foreground">
                <span className="inline-block rounded-md bg-card px-3 py-1">{connectConfig.hours.trim() || "A definir"}</span>
              </p>
            </div>
            {hasAddress && mapsQuery && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Abrir no Google Maps →
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
