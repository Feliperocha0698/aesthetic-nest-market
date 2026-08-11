import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Service } from "@/data/site";

export const ServiceCard = ({ service }: { service: Service }) => {
  const { t } = useLanguage();

  return (
    <article className="group bg-card rounded-lg overflow-hidden border border-border hover-lift flex flex-col">
      <div className="image-reveal aspect-[4/3]">
        <img
          src={service.image}
          alt={t(`services.${service.id}.name`)}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <h3 className="font-serif text-xl md:text-2xl text-primary">
          {t(`services.${service.id}.name`)}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
          {t(`services.${service.id}.short`)}
        </p>
        <Link
          to={`/reservas?servico=${service.id}`}
          className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary group-hover:text-secondary transition-colors"
        >
          {t("common.bookNow")}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};
