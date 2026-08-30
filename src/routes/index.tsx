import { createFileRoute } from "@tanstack/react-router";
import { connectConfig } from "@/lib/connect-config";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Servicos } from "@/components/site/Servicos";
import { Diferenciais } from "@/components/site/Diferenciais";
import { Reconhecimento } from "@/components/site/Reconhecimento";
import { EncontreOnline } from "@/components/site/EncontreOnline";
import { Contato } from "@/components/site/Contato";
import { Localizacao } from "@/components/site/Localizacao";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${connectConfig.companyName} — Tecnologia, Assistência e Informática`,
      },
      {
        name: "description",
        content:
          "Connect Informática em Severínia - SP: venda de equipamentos, assistência técnica, manutenção de impressoras e soluções em informática. Loja física, Mercado Livre e Instagram.",
      },
      {
        property: "og:title",
        content: `${connectConfig.companyName} — Tecnologia e Assistência`,
      },
      {
        property: "og:description",
        content:
          "Venda de equipamentos, assistência técnica, manutenção de impressoras e soluções em informática em Severínia - SP.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        {/* Fluxo: Serviços → Diferenciais → Reconhecimento → Encontre Online → Contato → Localização */}
        <Hero />
        <Servicos />
        <Diferenciais />
        <Reconhecimento />
        <EncontreOnline />
        <Contato />
        <Localizacao />
      </main>
      <Footer />
    </>
  );
}
