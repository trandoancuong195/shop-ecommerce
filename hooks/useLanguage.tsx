import { useRouter } from "next/router";
import en from "../locales/en";
import vi from "../locales/vi";
import fa from "../locales/fa";

export const useLanguage = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en : locale === "vi" ? vi : fa;
  return { t, locale };
};
