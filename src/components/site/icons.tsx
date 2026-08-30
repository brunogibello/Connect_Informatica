/** Ícones de plataformas externas usados pela Connect. */

/**
 * Representação vetorial do ícone característico do Mercado Livre: cápsula
 * amarela com o aperto de mãos azul, substituindo o círculo genérico anterior.
 */
export function MercadoLivreIcon({ className }: { className?: string }) {
  return (
    <img
      src="/svg/mercado-libre.svg"
      role="img"
      aria-label="Mercado Livre"
      alt="Mercado Livre"
      className={`${className ?? ""} object-contain`}
    />
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" role="img" aria-label="Instagram" className={className}>
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%" r="135%">
          <stop offset="0%" stopColor="#FFDD55" />
          <stop offset="10%" stopColor="#FFDD55" />
          <stop offset="50%" stopColor="#FF543E" />
          <stop offset="100%" stopColor="#C837AB" />
        </radialGradient>
      </defs>
      <rect x="3" y="3" width="42" height="42" rx="12" fill="url(#ig-grad)" />
      <rect x="11.5" y="11.5" width="25" height="25" rx="8" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="24" cy="24" r="6.2" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="33" cy="15" r="1.9" fill="#fff" />
    </svg>
  );
}
