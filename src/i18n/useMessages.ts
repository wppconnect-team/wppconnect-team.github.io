import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import en from "./messages/en.json";
import pt from "./messages/pt-BR.json";
import { resolveMessage } from "./core.mjs";
export default function useMessages() {
  const { i18n } = useDocusaurusContext();
  return (key: keyof typeof en) =>
    resolveMessage(i18n.currentLocale, key, { en, "pt-BR": pt });
}
