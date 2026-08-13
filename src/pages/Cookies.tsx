import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageProvider";

const content = {
  pt: {
    title: "Uso de Cookies",
    updated: "Última atualização: agosto de 2026",
    sections: [
      {
        title: "1. O que são cookies",
        text: "Cookies são pequenos arquivos de texto armazenados no navegador do usuário quando ele visita um site. Eles ajudam a lembrar preferências, melhorar a navegação e entender como o site é utilizado.",
      },
      {
        title: "2. Cookies que utilizamos",
        text: "A BPC Receptivo utiliza cookies essenciais para o funcionamento do site (por exemplo, para manter o idioma escolhido pelo visitante) e, quando aplicável, cookies analíticos para melhorar a experiência de navegação. Não utilizamos cookies para publicidade comportamental.",
      },
      {
        title: "3. Como gerenciar cookies",
        text: "O usuário pode configurar o navegador para recusar ou excluir cookies a qualquer momento. Ajustes estão disponíveis nas preferências de privacidade do navegador. Ao desativar cookies essenciais, algumas funcionalidades do site podem ser limitadas.",
      },
      {
        title: "4. Alterações",
        text: "A BPC Receptivo pode atualizar este aviso de cookies conforme a evolução do site. Recomendamos consultar esta página periodicamente.",
      },
    ],
  },
  en: {
    title: "Cookie Notice",
    updated: "Last updated: August 2026",
    sections: [
      {
        title: "1. What are cookies",
        text: "Cookies are small text files stored in the user's browser when visiting a website. They help remember preferences, improve navigation and understand how the site is used.",
      },
      {
        title: "2. Cookies we use",
        text: "BPC Receptivo uses essential cookies for the website to function (for example, to keep the visitor's chosen language) and, when applicable, analytics cookies to improve the browsing experience. We do not use cookies for behavioural advertising.",
      },
      {
        title: "3. How to manage cookies",
        text: "Users can configure their browser to refuse or delete cookies at any time. Settings are available in the browser's privacy preferences. Disabling essential cookies may limit some website features.",
      },
      {
        title: "4. Changes",
        text: "BPC Receptivo may update this cookie notice as the website evolves. We recommend checking this page periodically.",
      },
    ],
  },
};

const Cookies = () => {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <Layout>
      <section className="bg-primary text-ice py-16 md:py-24">
        <div className="container-full">
          <p className="eyebrow">BPC Receptivo</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ice">
            {c.title}
          </h1>
        </div>
      </section>
      <section className="section bg-background">
        <div className="container-full max-w-3xl">
          <p className="text-sm text-muted-foreground mb-10">{c.updated}</p>
          <div className="space-y-8">
            {c.sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-serif text-xl text-primary">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
