import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { whatsappLink } from "@/data/site";

export const WhatsAppFloat = () => {
  const { t, language } = useLanguage();
  const message =
    language === "pt"
      ? "Olá! Gostaria de informações sobre uma viagem com a BPC Recreativo."
      : "Hello! I'd like information about a trip with BPC Recreativo.";

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("common.talkWhatsApp")}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 h-14 w-14 md:w-auto md:px-5 justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <MessageCircle className="w-6 h-6 shrink-0" />
      <span className="hidden md:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
};
