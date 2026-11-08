export function normalizeLocale(locale?: string): "en" | "pt-BR";
export function resolveMessage(
  locale: string,
  key: string,
  catalogs: Record<string, Record<string, string>>,
): string;
