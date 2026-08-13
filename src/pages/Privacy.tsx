import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageProvider";

const content = {
  pt: {
    title: "Política de Privacidade",
    updated: "Última atualização: agosto de 2026",
    sections: [
      {
        title: "1. Responsável pelo tratamento",
        text: "A BPC Receptivo, inscrita sob o CNPJ [insira CNPJ], com sede em [insira endereço completo], é responsável pelo tratamento dos dados pessoais coletados em nossos canais. Para dúvidas, use o e-mail reservas@bpcrecreativo.com.br ou nosso WhatsApp.",
      },
      {
        title: "2. Dados que coletamos",
        text: "Coletamos nome, e-mail, telefone, informações da viagem (origem, destino, datas, horários, número de passageiros e bagagens) e observações quando você preenche o formulário de reserva. No formulário de contato, coletamos nome, e-mail e mensagem. Dados de pagamento são processados diretamente pelo Stripe e não são armazenados por nós.",
      },
      {
        title: "3. Finalidade do tratamento",
        text: "Utilizamos os dados para gerenciar reservas, responder solicitações, processar pagamentos, enviar confirmações e comunicações sobre o serviço, além de melhorar a experiência do cliente.",
      },
      {
        title: "4. Base legal",
        text: "O tratamento se baseia na execução do contrato de transporte, no consentimento do titular e no legítimo interesse da BPC Receptivo, conforme previsto na Lei Geral de Proteção de Dados (LGPD).",
      },
      {
        title: "5. Compartilhamento de dados",
        text: "Compartilhamos dados apenas com prestadores essenciais ao serviço: Stripe (processamento de pagamentos), WhatsApp (comunicação direta) e Lovable Cloud/Supabase (hospedagem e banco de dados dos formulários).",
      },
      {
        title: "6. Segurança",
        text: "Adotamos medidas técnicas e administrativas adequadas para proteger seus dados contra acessos não autorizados, perda ou destruição.",
      },
      {
        title: "7. Seus direitos",
        text: "Você pode solicitar acesso, correção, exclusão, portabilidade ou revogação de consentimento dos seus dados. Entre em contato pelo e-mail ou WhatsApp indicados.",
      },
      {
        title: "8. Alterações nesta política",
        text: "Podemos atualizar esta política periodicamente. Recomendamos consultá-la sempre antes de enviar novas solicitações.",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: August 2026",
    sections: [
      {
        title: "1. Data controller",
        text: "BPC Receptivo, registered under CNPJ [insert CNPJ], headquartered at [insert full address], is the data controller for personal data collected through our channels. For questions, use reservas@bpcrecreativo.com.br or our WhatsApp.",
      },
      {
        title: "2. Data we collect",
        text: "We collect name, email, phone, trip details (origin, destination, dates, times, number of passengers and luggage) and notes when you fill out the booking form. The contact form collects name, email and message. Payment data is processed directly by Stripe and is not stored by us.",
      },
      {
        title: "3. Purpose of processing",
        text: "We use the data to manage bookings, respond to inquiries, process payments, send confirmations and service communications, and improve the customer experience.",
      },
      {
        title: "4. Legal basis",
        text: "Processing is based on the performance of the transport contract, the data subject's consent and the legitimate interest of BPC Receptivo, in accordance with Brazilian data protection law (LGPD).",
      },
      {
        title: "5. Data sharing",
        text: "We only share data with providers essential to the service: Stripe (payment processing), WhatsApp (direct communication) and Lovable Cloud/Supabase (hosting and form database).",
      },
      {
        title: "6. Security",
        text: "We adopt appropriate technical and administrative measures to protect your data against unauthorized access, loss or destruction.",
      },
      {
        title: "7. Your rights",
        text: "You may request access, correction, deletion, portability or withdrawal of consent for your data. Contact us via the email or WhatsApp listed.",
      },
      {
        title: "8. Changes to this policy",
        text: "We may update this policy periodically. We recommend reviewing it before submitting new requests.",
      },
    ],
  },
};

const Privacy = () => {
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

export default Privacy;
