import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { services } from "@/data/site";

const Services = () => {
  const { t, tr } = useLanguage();

  return (
    <Layout>
      <section className="bg-primary text-ice py-16 md:py-24">
        <div className="container-full">
          <p className="eyebrow">BPC Recreativo</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ice">{t("services.pageTitle")}</h1>
          <p className="mt-4 text-ice/70 max-w-xl leading-relaxed">{t("services.pageSubtitle")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-full space-y-20 md:space-y-28">
          {services.map((service, index) => (
            <Reveal key={service.id}>
              <article
                className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="image-reveal rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={t(`services.${service.id}.name`)}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </figure>

                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-primary">
                    {t(`services.${service.id}.name`)}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {t(`services.${service.id}.description`)}
                  </p>

                  <div className="mt-7">
                    <h3 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-secondary">
                      {t("services.forWhomTitle")}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {t(`services.${service.id}.forWhom`)}
                    </p>
                  </div>

                  <div className="mt-7">
                    <h3 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-secondary">
                      {t("services.includedTitle")}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {tr<string[]>(`services.${service.id}.included`).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                          <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/reservas?servico=${service.id}`}
                    className="mt-8 inline-flex items-center gap-2 h-12 px-7 rounded-md bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-wide hover:bg-petrol-light transition-colors"
                  >
                    {t("common.bookNow")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;
