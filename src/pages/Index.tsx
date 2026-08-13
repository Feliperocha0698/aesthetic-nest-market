import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Car, Headphones, Clock, Quote } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { useLanguage } from "@/i18n/LanguageProvider";
import { galleryImages, heroImage, services, testimonials } from "@/data/site";

const differentials = [
  { key: "drivers", Icon: ShieldCheck },
  { key: "fleet", Icon: Car },
  { key: "support", Icon: Headphones },
  { key: "punctuality", Icon: Clock },
];

const Index = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <img
          src={heroImage}
          alt={
            language === "pt"
              ? "Veículo executivo da BPC Receptivo em estrada litorânea"
              : "BPC Receptivo executive vehicle on a coastal road"
          }
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-full relative py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">{t("home.heroEyebrow")}</p>
            <h1 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.08] text-ice text-balance">
              {t("home.heroTitle")}
            </h1>
            <p className="mt-6 text-base md:text-lg text-ice/80 leading-relaxed max-w-xl">
              {t("home.heroSubtitle")}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/reservas"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-md bg-secondary text-secondary-foreground text-sm font-semibold uppercase tracking-wide hover:bg-gold-light transition-colors"
              >
                {t("common.bookNow")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 h-12 px-7 rounded-md border border-ice/40 text-ice text-sm font-semibold uppercase tracking-wide hover:bg-ice/10 transition-colors"
              >
                {t("common.allServices")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-background">
        <div className="container-full">
          <SectionHeading
            eyebrow={t("home.servicesEyebrow")}
            title={t("home.servicesTitle")}
            subtitle={t("home.servicesSubtitle")}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.1}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="section bg-primary text-ice">
        <div className="container-full">
          <SectionHeading
            eyebrow={t("home.differentialsEyebrow")}
            title={t("home.differentialsTitle")}
            light
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {differentials.map(({ key, Icon }, i) => (
              <Reveal key={key} delay={i * 0.08}>
                <div className="border-t border-ice/20 pt-6">
                  <Icon className="w-7 h-7 text-gold" />
                  <h3 className="mt-4 font-serif text-xl text-ice">
                    {t(`differentials.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-ice/70 leading-relaxed">
                    {t(`differentials.${key}.text`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section bg-background">
        <div className="container-full">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title={t("gallery.pageTitle")} subtitle={t("home.gallerySubtitle")} />
            <Link
              to="/galeria"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary hover:text-secondary transition-colors"
            >
              {t("common.viewGallery")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.slice(0, 4).map((img, i) => (
              <Reveal key={img.src} delay={i * 0.06} className="image-reveal rounded-lg overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt[language]}
                  loading="lazy"
                  className="w-full h-56 md:h-64 object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-muted">
        <div className="container-full">
          <SectionHeading
            eyebrow={t("home.testimonialsEyebrow")}
            title={t("home.testimonialsTitle")}
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.1}>
                <figure className="h-full bg-card rounded-lg border border-border p-7 flex flex-col">
                  <Quote className="w-7 h-7 text-secondary" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80 flex-1">
                    {item.quote[language]}
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="font-semibold text-sm text-primary">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.role[language]}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-petrol-dark text-ice">
        <div className="container-full py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl md:text-4xl text-ice">{t("home.ctaTitle")}</h2>
            <p className="mt-3 text-ice/70 leading-relaxed">{t("home.ctaText")}</p>
          </div>
          <Link
            to="/reservas"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-md bg-secondary text-secondary-foreground text-sm font-semibold uppercase tracking-wide hover:bg-gold-light transition-colors shrink-0"
          >
            {t("common.bookNow")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
