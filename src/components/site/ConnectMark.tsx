import { connectConfig } from "@/lib/connect-config";

/** Logos oficiais fornecidos pela Connect. */
export function ConnectGlyph({ className }: { className?: string }) {
  return (
    <img
      src="/connect-symbol.png"
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}

export function ConnectMark({
  className,
  showWordmark = true,
  compact = false,
}: {
  className?: string;
  tone?: "light" | "dark";
  showWordmark?: boolean;
  compact?: boolean;
}) {
  if (!showWordmark) return <ConnectGlyph className={className} />;

  return (
    <img
      src={compact ? "/connect-logo.png" : "/connect-logo-full.png"}
      alt={connectConfig.companyName}
      className={`h-auto w-auto object-contain ${compact ? "h-9 max-w-[150px]" : "max-h-20 max-w-full"} ${className ?? ""}`}
    />
  );
}
