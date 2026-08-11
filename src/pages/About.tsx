import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Target } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { aboutImage, stats } from "@/data/site";

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-primary text-ice py-16 md:py-24">
        <div className="container-full">
          <p className="eyebrow">BPC Recreativo</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ice">{t("about.pageTitle")}</h1>
          <p className="mt-4 text-ice/70 max-w-xl leading-relaxed">{t("about.pageSubtitle")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-full grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="image-reveal rounded-lg overflow-hidden">
            <img
              src={aboutImage}
              alt={t("about.pageTitle")}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl text-primary">{t("about.storyTitle")}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{t("about.storyText1")}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t("about.storyText2")}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container-full grid gap-8 grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.08} className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-primary">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t(`about.stats.${s.key}`)}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-full grid gap-8 md:grid-cols-2">
          <Reveal className="bg-card border border-border rounded-lg p-8">
            <Target className="w-8 h-8 text-secondary" />
            <h2 className="mt-4 font-serif text-2xl text-primary">{t("about.missionTitle")}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{t("about.missionText")}</p>
          </Reveal>
          <Reveal delay={0.1} className="bg-card border border-border rounded-lg p-8">
            <ShieldCheck className="w-8 h-8 text-secondary" />
            <h2 className="mt-4 font-serif text-2xl text-primary">{t("about.valuesTitle")}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{t("about.valuesText")}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-petrol-dark text-ice">
        <div className="container-full py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-serif text-3xl text-ice max-w-lg">{t("home.ctaTitle")}</h2>
          <Link
            to="/reservas"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-md bg-secondary text-secondary-foreground text-sm font-semibold uppercase tracking-wide hover:bg-gold-light transition-colors"
          >
            {t("common.bookNow")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
