/**
 * Configuração central da Connect Informática.
 * Todos os canais, contatos e dados de localização ficam concentrados aqui
 * para evitar informações duplicadas entre as seções do site.
 */
export interface ConnectConfig {
  companyName: string;
  shortName: string;
  tagline: string;
  mercadoLivreUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  phone: string;
  whatsapp: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  cityRegion: string;
  mapsQuery: string;
  hours: string;
}

export const connectConfig: ConnectConfig = {
  companyName: "Connect Informática",
  shortName: "Connect",
  tagline: "Tecnologia, serviço e confiança perto de você.",

  mercadoLivreUrl:
    "https://www.mercadolivre.com.br/pagina/connectinformatica#from=share_eshop",
  instagramUrl:
    "https://www.instagram.com/connect_info_renan?igsi=aDBjYnJ6c3lwZnA=",
  instagramHandle: "@connect_info_renan",

  phone: "(17) 3817-1123",
  whatsapp: "551738171123",
  email: "connectservidor@gmail.com",

  addressLine1: "Av. Severino Sicchieri, 453 - Loja D - Centro",
  addressLine2: "CEP 14735-015",
  cityRegion: "Severínia - SP",
  mapsQuery:
    "Connect Informática, Av. Severino Sicchieri, 453 - Loja D - Centro, Severínia - SP, 14735-015, Brasil",
  hours: "Segunda a sexta-feira, das 8h30 às 18h",
};

export const hasMercadoLivre = () => connectConfig.mercadoLivreUrl.trim().length > 0;
export const hasInstagram = () => connectConfig.instagramUrl.trim().length > 0;
