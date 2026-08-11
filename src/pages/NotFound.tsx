import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageProvider";

const NotFound = () => {
  const { language, t } = useLanguage();

  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-8xl font-serif text-muted-foreground/30 mb-4">404</p>
            <h1 className="font-serif text-3xl md:text-4xl text-primary mb-4">
              {language === "pt" ? "Página não encontrada" : "Page not found"}
            </h1>
            <p className="text-muted-foreground mb-9 max-w-md mx-auto">
              {language === "pt"
                ? "A página que você procura não existe ou foi movida."
                : "The page you are looking for doesn't exist or has been moved."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-wide hover:bg-petrol-light transition-colors"
              >
                {language === "pt" ? "Voltar à home" : "Back home"}
              </Link>
              <Link
                to="/reservas"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-border text-sm font-semibold uppercase tracking-wide text-primary hover:bg-muted transition-colors"
              >
                {t("common.bookNow")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
