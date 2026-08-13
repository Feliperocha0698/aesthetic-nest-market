import { useLanguage } from "@/i18n/LanguageProvider";
import { whatsappLink } from "@/data/site";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M16 0C7.164 0 0 7.164 0 16c0 2.826.737 5.48 2.028 7.78L.07 30.986c-.19.68.476 1.346 1.156 1.156l7.206-1.958A15.94 15.94 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0z"
      fill="#25D366"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.64 22.886c-.386 1.09-1.93 2.008-3.178 2.276-.852.184-1.857.332-5.39-1.132-4.536-1.87-7.45-6.49-7.674-6.79-.22-.296-1.81-2.41-1.81-4.6 0-2.196 1.16-3.264 1.572-3.712.41-.448.896-.56 1.194-.56.298 0 .596.002.856.016.272.014.638-.104.998.76.386.922.826 2.35.894 2.52.068.168.112.364.022.588-.09.224-.168.296-.31.47-.142.176-.296.366-.424.492-.142.142-.288.294-.126.576.162.278.72 1.188 1.546 1.922 1.062.948 1.956 1.242 2.288 1.378.248.1.424.048.548-.074.174-.168.686-.798.868-1.074.182-.276.364-.232.61-.14.248.092 1.588.748 1.86.884.272.136.452.206.518.32.066.116.048.666-.338 1.756z"
      fill="#fff"
    />
  </svg>
);

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
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-12 w-12 md:w-auto md:px-4 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <WhatsAppIcon className="w-7 h-7 shrink-0" />
      <span className="hidden md:inline text-sm font-semibold ml-2">WhatsApp</span>
    </a>
  );
};
