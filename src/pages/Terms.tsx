import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageProvider";

const content = {
  pt: {
    title: "Termos de Uso e Serviço",
    updated: "Última atualização: agosto de 2026",
    sections: [
      {
        title: "1. Objeto",
        text: "A BPC Receptivo oferece serviços de transporte executivo, transfer e viagens personalizadas na Bahia, incluindo destinos como Salvador e o litoral baiano. Estes Termos regulam o uso do site e a contratação dos serviços.",
      },
      {
        title: "2. Reservas",
        text: "As reservas são solicitadas pelo formulário do site e estão sujeitas à disponibilidade da frota e à confirmação da BPC Receptivo. O envio do formulário não garante a reserva enquanto o sinal não for confirmado.",
      },
      {
        title: "3. Pagamento",
        text: "Para garantir a data, é cobrado um sinal de R$ 100,00 processado via Stripe. O valor restante do serviço é combinado diretamente com a nossa equipe e deve ser pago conforme acordado entre as partes.",
      },
      {
        title: "4. Cancelamento e reembolso",
        text: "A política de cancelamento e reembolso do sinal deve ser consultada diretamente com a BPC Receptivo, pois pode variar conforme a antecedência e o tipo de serviço contratado.",
      },
      {
        title: "5. Obrigações do cliente",
        text: "O cliente deve fornecer informações corretas e completas sobre o trajeto, horários, número de passageiros, bagagens e necessidades especiais. Atrasos na chegada do cliente podem afetar o cronograma da viagem.",
      },
      {
        title: "6. Obrigações da BPC Receptivo",
        text: "A BPC Receptivo se compromete a prestar o serviço com pontualidade, segurança, conforto e atendimento profissional, utilizando motoristas credenciados e frota monitorada.",
      },
      {
        title: "7. Limitação de responsabilidade",
        text: "Não nos responsabilizamos por eventos de força maior, como condições climáticas extremas, acidentes, bloqueios de vias ou outras circunstâncias fora do nosso controle que possam impedir ou atrasar a prestação do serviço.",
      },
      {
        title: "8. Disposições gerais",
        text: "Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca de Salvador/BA para resolver quaisquer dúvidas ou controvérsias.",
      },
    ],
  },
  en: {
    title: "Terms of Use and Service",
    updated: "Last updated: August 2026",
    sections: [
      {
        title: "1. Purpose",
        text: "BPC Receptivo offers executive transport, transfers and custom travel services in Bahia, including destinations such as Salvador and the Bahia coast. These Terms govern the use of the website and the hiring of services.",
      },
      {
        title: "2. Bookings",
        text: "Bookings are requested through the website form and are subject to fleet availability and confirmation by BPC Receptivo. Submitting the form does not guarantee the booking until the deposit is confirmed.",
      },
      {
        title: "3. Payment",
        text: "To secure the date, a R$ 100 deposit is charged via Stripe. The remaining service amount is arranged directly with our team and must be paid as agreed between the parties.",
      },
      {
        title: "4. Cancellation and refund",
        text: "The cancellation and refund policy for the deposit should be checked directly with BPC Receptivo, as it may vary depending on advance notice and the type of service hired.",
      },
      {
        title: "5. Customer obligations",
        text: "The customer must provide correct and complete information about the route, schedule, number of passengers, luggage and special needs. Customer delays may affect the trip schedule.",
      },
      {
        title: "6. BPC Receptivo obligations",
        text: "BPC Receptivo undertakes to provide the service with punctuality, safety, comfort and professional service, using accredited drivers and a monitored fleet.",
      },
      {
        title: "7. Limitation of liability",
        text: "We are not liable for force majeure events such as extreme weather, accidents, road blockages or other circumstances beyond our control that may prevent or delay the service.",
      },
      {
        title: "8. General provisions",
        text: "These Terms are governed by Brazilian law. The court of Salvador/BA is elected to resolve any questions or disputes.",
      },
    ],
  },
};

const Terms = () => {
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

export default Terms;
