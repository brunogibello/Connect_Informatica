import { useState } from "react";
import { connectConfig } from "@/lib/connect-config";

function InfoLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string | undefined;
}) {
  const content = value.trim() ? value : "A definir";
  const muted = !value.trim();
  return (
    <div className="grid grid-cols-[9rem_1fr] items-center gap-4">
      <span className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-primary/80">
        {label}
      </span>
      <span>
        {href ? (
          <a
            href={href}
            className="inline-block rounded-md bg-surface px-3 py-1 text-sm font-sans text-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            {content}
          </a>
        ) : (
          <span
            className={`inline-block rounded-md px-3 py-1 text-sm font-sans ${
              muted ? "text-muted-foreground/60 italic bg-transparent" : "text-foreground bg-surface"
            }`}
          >
            {content}
          </span>
        )}
      </span>
    </div>
  );
}

export function Contato() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contato via site — ${name || "Visitante"}`;
    const body = `Nome: ${name}\nContato: ${contact}\n\n${message}`;
    if (connectConfig.email.trim()) {
      window.location.href = `mailto:${connectConfig.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      return;
    }
    if (connectConfig.whatsapp.trim()) {
      const text = `${subject}\n${body}`;
      window.open(
        `https://wa.me/${connectConfig.whatsapp}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener",
      );
      return;
    }
    window.alert(
      "Os canais de contato ainda não foram configurados. Em breve você poderá enviar sua mensagem por aqui.",
    );
  };

  return (
    <section id="contato" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <header className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8 bg-primary" /> Contato
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Fale com a Connect
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tire dúvidas, peça um orçamento ou agende um atendimento. Estamos
            por aqui.
          </p>
        </header>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Infos */}
          <div className="flex flex-col gap-6 rounded-3xl border border-border bg-surface p-8">
            <div className="flex flex-col gap-4">
              <InfoLine
                label="Telefone"
                value={connectConfig.phone}
                href={connectConfig.phone ? `tel:${connectConfig.phone.replace(/\D/g, "")}` : undefined}
              />
              <InfoLine
                label="WhatsApp"
                value={connectConfig.whatsapp ? "(17) 3817-1123" : ""}
                href={connectConfig.whatsapp ? `https://wa.me/${connectConfig.whatsapp}` : undefined}
              />
              <InfoLine
                label="E-mail"
                value={connectConfig.email}
                href={connectConfig.email ? `mailto:${connectConfig.email}` : undefined}
              />
              <InfoLine label="Endereço" value={`${connectConfig.addressLine1}, ${connectConfig.addressLine2} — ${connectConfig.cityRegion}`} />
              <InfoLine label="Horário" value={connectConfig.hours} />
            </div>
            <a
              href="#encontre"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Ou encontre a Connect online →
            </a>
          </div>

          {/* Formulário */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <div className="grid gap-5">
              <Field label="Seu nome">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Como podemos te chamar?"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </Field>
              <Field label="E-mail ou telefone">
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                  placeholder="Para retornarmos o contato"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </Field>
              <Field label="Mensagem">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder="Conte o que você precisa..."
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </Field>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Enviar mensagem
              </button>
              <p className="text-center text-xs text-muted-foreground">
                O envio abre seu aplicativo de e-mail com a mensagem preenchida.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-display text-sm font-semibold text-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
