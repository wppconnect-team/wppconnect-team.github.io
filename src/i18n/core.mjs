export function normalizeLocale(locale) {
  return /^pt(?:-|$)/i.test(locale || "") ? "pt-BR" : "en";
}
export function resolveMessage(locale, key, catalogs) {
  const english = catalogs.en[key];
  if (typeof english !== "string" || !english.trim())
    throw new Error("Missing English message: " + key);
  const value = catalogs[normalizeLocale(locale)]?.[key];
  return typeof value === "string" && value.trim() ? value : english;
}
