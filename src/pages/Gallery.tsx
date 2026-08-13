import { useState } from "react";
import { X } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { galleryImages } from "@/data/site";

const Gallery = () => {
  const { t, language } = useLanguage();
  const [active, setActive] = useState<number | null>(null);

  return (
    <Layout>
      <section className="bg-primary text-ice py-16 md:py-24">
        <div className="container-full">
          <p className="eyebrow">BPC Receptivo</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ice">{t("gallery.pageTitle")}</h1>
          <p className="mt-4 text-ice/70 max-w-xl leading-relaxed">{t("gallery.pageSubtitle")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-full">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 0.08}>
                <button
                  onClick={() => setActive(i)}
                  className="image-reveal block w-full rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <img
                    src={img.src}
                    alt={img.alt[language]}
                    loading="lazy"
                    className="w-full h-64 md:h-72 object-cover"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-petrol-dark/95 flex items-center justify-center p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-6 text-ice p-2"
            aria-label="Fechar"
            onClick={() => setActive(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={galleryImages[active].src}
            alt={galleryImages[active].alt[language]}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
