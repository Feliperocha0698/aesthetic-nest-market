import { Link } from "react-router-dom";
import { Mail, MapPin, Clock, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

import {
  CONTACT_EMAIL,
  SERVICE_AREA,
  WHATSAPP_DISPLAY,
  services,
  whatsappLink,
} from "@/data/site";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-petrol-dark text-ice">
      <div className="container-full py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-1">
            <p className="font-serif text-2xl font-bold">
              BPC <span className="text-gold">Receptivo</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ice/60 max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-5">
              {t("footer.navTitle")}
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/", key: "nav.home" },
                { to: "/servicos", key: "nav.services" },
                { to: "/galeria", key: "nav.gallery" },
                { to: "/sobre", key: "nav.about" },
                { to: "/reservas", key: "nav.booking" },
                { to: "/contato", key: "nav.contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-ice/60 hover:text-ice transition-colors duration-300"
                  >
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-5">
              {t("footer.servicesTitle")}
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/servicos"
                    className="text-sm text-ice/60 hover:text-ice transition-colors duration-300"
                  >
                    {t(`services.${s.id}.name`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-5">
              {t("footer.legalTitle")}
            </h4>
            <ul className="space-y-3">
              {[
                { to: "/privacidade", key: "footer.privacy" },
                { to: "/termos", key: "footer.terms" },
                { to: "/cookies", key: "footer.cookies" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-ice/60 hover:text-ice transition-colors duration-300"
                  >
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-5">
              {t("footer.contactTitle")}
            </h4>
            <ul className="space-y-3 text-sm text-ice/60">
              <li>
                <a
                  href="https://www.instagram.com/bpcrecreativo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @BPCRECREATIVO"
                  className="flex items-center gap-2 hover:text-ice transition-colors"
                >
                  <Instagram size={20} className="text-gold" />
                  <span className="tracking-[0.15em]">@BPCRECREATIVO</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-ice transition-colors"
                >
                <WhatsAppIcon className="w-4 h-4 text-gold" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 hover:text-ice transition-colors"
                  aria-label={CONTACT_EMAIL}
                >
                  <Mail size={16} className="text-gold flex-shrink-0" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                {t("contact.hoursValue")}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                {SERVICE_AREA}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ice/10">
        <div className="container-full py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ice/40">
            © {new Date().getFullYear()} BPC Receptivo. {t("footer.rights")}
          </p>
          <p className="text-xs text-ice/40">{SERVICE_AREA}</p>
        </div>
      </div>

    </footer>
  );
};
