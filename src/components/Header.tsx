import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageProvider";
import { whatsappLink } from "@/data/site";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/servicos", key: "nav.services" },
  { to: "/galeria", key: "nav.gallery" },
  { to: "/sobre", key: "nav.about" },
  { to: "/reservas", key: "nav.booking" },
  { to: "/contato", key: "nav.contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm border-b border-transparent",
      )}
    >
      <nav className="container-full">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-serif text-xl md:text-2xl font-bold text-primary tracking-tight">
              BPC <span className="text-secondary">Receptivo</span>
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
              Transporte executivo
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <RouterNavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors duration-300 link-underline",
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary",
                  )
                }
              >
                {t(link.key)}
              </RouterNavLink>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden sm:flex items-center rounded-md border border-border overflow-hidden">
              {(["pt", "en"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  aria-label={lang === "pt" ? "Português" : "English"}
                  className={cn(
                    "px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider transition-colors",
                    language === lang
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-primary",
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>

            <Link
              to="/reservas"
              className="hidden md:inline-flex items-center gap-2 h-10 px-5 rounded-md bg-secondary text-secondary-foreground text-xs font-semibold tracking-wide uppercase hover:bg-gold-light transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {t("nav.cta")}
            </Link>

            <button
              className="lg:hidden p-2 text-primary"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border overflow-hidden"
            >
              <div className="py-6 space-y-1">
                {links.map((link) => (
                  <RouterNavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "block px-2 py-3 text-sm font-medium rounded-md transition-colors",
                        isActive ? "text-primary bg-accent" : "text-foreground hover:bg-accent",
                      )
                    }
                  >
                    {t(link.key)}
                  </RouterNavLink>
                ))}

                <div className="flex items-center gap-3 pt-4">
                  <div className="flex items-center rounded-md border border-border overflow-hidden">
                    {(["pt", "en"] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setLanguage(lang)}
                        className={cn(
                          "px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-colors",
                          language === lang
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center h-10 leading-10 rounded-md bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wide"
                  >
                    {t("common.talkWhatsApp")}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
