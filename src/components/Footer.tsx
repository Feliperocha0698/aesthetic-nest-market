import { Link } from "react-router-dom";
import { Mail, MessageCircle, MapPin, Clock, Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
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
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-serif text-2xl font-bold">
              BPC <span className="text-gold">Recreativo</span>
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
              {t("footer.contactTitle")}
            </h4>
            <ul className="space-y-3 text-sm text-ice/60">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-ice transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-gold" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 hover:text-ice transition-colors"
                >
                  <Mail className="w-4 h-4 text-gold" />
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
            © {new Date().getFullYear()} BPC Recreativo. {t("footer.rights")}
          </p>
          <p className="text-xs text-ice/40">{SERVICE_AREA}</p>
          <a
            href="https://instagram.com/bpcrecreativo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @BPCRECREATIVO"
            className="flex items-center gap-2 text-gold hover:text-ice transition-colors duration-300"
          >
            <Instagram size={24} />
            <span className="text-xs tracking-[0.15em]">@BPCRECREATIVO</span>
          </a>
        </div>
      </div>

    </footer>
  );
};
