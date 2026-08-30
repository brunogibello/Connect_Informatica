import { Link } from "@tanstack/react-router";
import { connectConfig, hasInstagram, hasMercadoLivre } from "@/lib/connect-config";
import { ConnectMark } from "./ConnectMark";
import { MercadoLivreIcon, InstagramIcon } from "./icons";

const LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Reconhecimento", href: "#reconhecimento" },
  { label: "Contato", href: "#contato" },
  { label: "Localização", href: "#localizacao" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <ConnectMark tone="dark" compact />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
              {connectConfig.tagline} Loja física e presença digital —
              tecnologia, serviço e confiança perto de você.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialLink
                href={connectConfig.mercadoLivreUrl}
                ready={hasMercadoLivre()}
                label="Mercado Livre da Connect"
              >
                <MercadoLivreIcon className="h-7 w-7" />
              </SocialLink>
              <SocialLink
                href={connectConfig.instagramUrl}
                ready={hasInstagram()}
                label="Instagram da Connect"
              >
                <InstagramIcon className="h-7 w-7" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Navegação
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink-foreground/80 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-muted">
              Contato
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <span className="inline-block rounded-md bg-ink-foreground/6 px-3 py-1 text-sm text-ink-foreground/90">
                  {connectConfig.phone.trim() || "Telefone a definir"}
                </span>
              </li>
              <li>
                <a
                  href={connectConfig.email ? `mailto:${connectConfig.email}` : undefined}
                  className="inline-block rounded-md bg-ink-foreground/6 px-3 py-1 text-sm text-ink-foreground/90 hover:text-primary"
                >
                  {connectConfig.email.trim() || "E-mail a definir"}
                </a>
              </li>
              <li>
                <span className="inline-block rounded-md bg-ink-foreground/6 px-3 py-1 text-sm text-ink-foreground/90">
                  {connectConfig.cityRegion.trim() || "Endereço a definir"}
                </span>
              </li>
            </ul>
            <Link
              to="/"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Voltar ao topo ↑
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-ink-muted">
            © {year} {connectConfig.companyName}. Todos os direitos reservados.
          </p>
 <p className="text-sm text-muted-foreground">
  Desenvolvido por{" "}

  <a
    href="mailto:bruno_gibello@outlook.com"
    className="text-primary hover:underline underline-offset-4 transition-all cursor-pointer"
  >
    Bruno Gibello Pereira
  </a>

  {" & "}

  <a
    href="mailto:isadorapauladacruz098@gmail.com"
    className="text-primary hover:underline underline-offset-4 transition-all cursor-pointer"
  >
    Isadora Paula da Cruz
  </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  ready,
  label,
  children,
}: {
  href: string;
  ready: boolean;
  label: string;
  children: React.ReactNode;
}) {
  if (!ready) {
    return (
      <span
        aria-disabled
        title="Em breve"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-ink-border opacity-50"
      >
        {children}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-border transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg hover:shadow-primary/20"
    >
      {children}
    </a>
  );
}
