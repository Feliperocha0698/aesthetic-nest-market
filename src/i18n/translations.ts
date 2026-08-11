export type Language = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      home: "Home",
      services: "Serviços",
      gallery: "Galeria",
      about: "Sobre",
      booking: "Reservas",
      contact: "Contato",
      cta: "Solicitar reserva",
    },
    common: {
      knowMore: "Saiba mais",
      bookNow: "Solicitar reserva",
      talkWhatsApp: "Falar no WhatsApp",
      allServices: "Ver todos os serviços",
      viewGallery: "Ver galeria",
      required: "Campo obrigatório",
      sending: "Enviando...",
    },
    home: {
      heroEyebrow: "Transporte executivo na Bahia",
      heroTitle: "Viaje com conforto, pontualidade e segurança",
      heroSubtitle:
        "Transfer executivo, viagens para Salvador e para o litoral com motoristas credenciados e frota monitorada.",
      servicesEyebrow: "Nossos serviços",
      servicesTitle: "Soluções sob medida para cada trajeto",
      servicesSubtitle:
        "Do aeroporto à reunião, da capital à praia: cuidamos de cada detalhe do seu deslocamento.",
      differentialsEyebrow: "Por que a BPC",
      differentialsTitle: "Confiabilidade em cada quilômetro",
      gallerySubtitle: "Frota, destinos e bastidores das nossas viagens.",
      testimonialsEyebrow: "Depoimentos",
      testimonialsTitle: "Quem viaja com a gente, volta",
      ctaTitle: "Pronto para reservar sua viagem?",
      ctaText:
        "Envie os detalhes do trajeto e nossa equipe responde com um orçamento personalizado.",
    },
    differentials: {
      drivers: {
        title: "Motoristas credenciados",
        text: "Profissionais treinados, documentados e avaliados continuamente.",
      },
      fleet: {
        title: "Frota monitorada",
        text: "Veículos revisados, higienizados e acompanhados por rastreamento.",
      },
      support: {
        title: "Atendimento 24h",
        text: "Suporte direto por WhatsApp antes, durante e depois da viagem.",
      },
      punctuality: {
        title: "Pontualidade garantida",
        text: "Planejamento de rota e acompanhamento de voos para nunca atrasar.",
      },
    },
    services: {
      pageTitle: "Serviços",
      pageSubtitle:
        "Transporte executivo e viagens personalizadas com padrão profissional.",
      includedTitle: "O que está incluso",
      forWhomTitle: "Para quem é",
      transfer: {
        name: "Transfer Executivo",
        short:
          "Traslados corporativos e particulares com veículos executivos e motorista à disposição.",
        description:
          "Transfer porta a porta para aeroportos, hotéis, reuniões e eventos. Acompanhamos o status do voo, monitoramos o trânsito e ajustamos a rota para garantir a sua pontualidade.",
        forWhom:
          "Executivos, empresas, equipes em viagem de trabalho e passageiros que precisam de discrição e pontualidade.",
        included: [
          "Motorista bilíngue sob solicitação",
          "Acompanhamento de voo em tempo real",
          "Água e Wi-Fi a bordo",
          "Espera cortesia de até 60 minutos no aeroporto",
        ],
      },
      salvador: {
        name: "Viagens para Salvador",
        short:
          "Deslocamentos confortáveis até a capital baiana, com roteiro flexível e motorista dedicado.",
        description:
          "Viagens intermunicipais para Salvador com saída no horário que você escolher. Ideal para compromissos profissionais, consultas, eventos e conexões aéreas, com paradas planejadas ao longo do trajeto.",
        forWhom:
          "Famílias, grupos, empresas e passageiros que buscam alternativa segura e confortável ao transporte convencional.",
        included: [
          "Saída no endereço indicado",
          "Paradas programadas na rota",
          "Bagagem ampla acomodada",
          "Opção de ida e volta com desconto",
        ],
      },
      coast: {
        name: "Viagens para o Litoral",
        short:
          "Praias e destinos do litoral baiano com conforto do início ao fim do passeio.",
        description:
          "Roteiros para o litoral com veículo exclusivo, motorista à disposição e flexibilidade para montar o seu dia. Combinamos horários, paradas e destinos de acordo com o seu grupo.",
        forWhom:
          "Turistas, grupos de amigos, famílias e empresas organizando experiências e day use.",
        included: [
          "Roteiro personalizado",
          "Motorista à disposição durante o passeio",
          "Sugestões de destinos e restaurantes",
          "Veículo exclusivo para o seu grupo",
        ],
      },
    },
    gallery: {
      pageTitle: "Galeria",
      pageSubtitle: "Um pouco da nossa frota, dos destinos e das viagens.",
    },
    about: {
      pageTitle: "Sobre a BPC Recreativo",
      pageSubtitle: "Transporte com padrão executivo e cuidado com pessoas.",
      storyTitle: "Nossa história",
      storyText1:
        "A BPC Recreativo nasceu para oferecer um transporte diferente na Bahia: pontual, confortável e conduzido por profissionais que entendem a importância de cada compromisso.",
      storyText2:
        "Atendemos empresas, famílias e turistas com uma operação enxuta e atenta, em que cada reserva é acompanhada de perto pela nossa equipe — do primeiro contato até a chegada ao destino.",
      missionTitle: "Missão",
      missionText:
        "Transportar pessoas com segurança, pontualidade e hospitalidade, transformando o deslocamento em parte agradável da viagem.",
      valuesTitle: "Compromisso com a segurança",
      valuesText:
        "Manutenção preventiva, documentação em dia, rastreamento e treinamento contínuo dos motoristas fazem parte da nossa rotina.",
      stats: {
        years: "Anos de estrada",
        trips: "Viagens realizadas",
        clients: "Clientes atendidos",
        rating: "Avaliação média",
      },
    },
    booking: {
      pageTitle: "Reservas",
      pageSubtitle:
        "Envie os detalhes da sua viagem e retornamos com um orçamento personalizado.",
      formTitle: "Dados da viagem",
      name: "Nome completo",
      email: "E-mail",
      phone: "Telefone / WhatsApp",
      service: "Serviço",
      selectService: "Selecione o serviço",
      origin: "Origem",
      destination: "Destino",
      date: "Data",
      time: "Horário",
      passengers: "Passageiros",
      luggage: "Bagagens",
      roundTrip: "Ida e volta",
      returnDate: "Data de retorno",
      returnTime: "Horário de retorno",
      notes: "Observações",
      notesPlaceholder: "Voo, cadeirinha, paradas, necessidades especiais...",
      submit: "Enviar solicitação",
      priceNote:
        "O valor total é calculado sob consulta. Para garantir a data, cobramos um sinal de R$ 100,00 pago on-line; o restante é combinado com a nossa equipe.",
      successTitle: "Solicitação enviada!",
      successText:
        "Recebemos os dados da sua viagem. Falta apenas o sinal para confirmar a reserva.",
      summaryTitle: "Resumo da solicitação",
      sendWhatsApp: "Enviar resumo no WhatsApp",
      newRequest: "Fazer nova solicitação",
      errorTitle: "Não foi possível enviar",
      errorText: "Tente novamente ou fale conosco pelo WhatsApp.",
      payTitle: "Confirme com o sinal de R$ 100",
      payText:
        "Pague o sinal de R$ 100 para garantir a sua data. O valor restante é combinado com a nossa equipe após a confirmação do trajeto.",
      payLoading: "Carregando pagamento seguro...",
      payError: "Não foi possível iniciar o pagamento. Tente novamente.",
      paidTitle: "Reserva confirmada!",
      paidText:
        "Recebemos o seu sinal e a reserva está confirmada. Envie o resumo no WhatsApp para a nossa equipe finalizar os detalhes com você.",
      pendingTitle: "Pagamento em processamento",
      pendingText:
        "Ainda estamos confirmando o seu pagamento. Assim que for aprovado, a reserva é confirmada.",
      cancelPay: "Pagar depois",
      depositBadge: "Sinal de R$ 100",
      steps: {
        title: "Como funciona",
        one: "Você envia os detalhes da viagem por este formulário.",
        two: "Você paga o sinal de R$ 100 on-line para garantir a data.",
        three: "Você recebe a confirmação no WhatsApp e por e-mail.",
      },
    },
    contact: {
      pageTitle: "Contato",
      pageSubtitle: "Fale com a nossa equipe. Respondemos rápido.",
      formTitle: "Envie uma mensagem",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      send: "Enviar mensagem",
      infoTitle: "Canais de atendimento",
      whatsapp: "WhatsApp",
      emailLabel: "E-mail",
      hours: "Horário de atendimento",
      hoursValue: "Todos os dias, 24 horas",
      area: "Área de atuação",
      areaValue: "Bahia e destinos sob consulta",
      successTitle: "Mensagem enviada!",
      successText: "Obrigado pelo contato. Retornaremos em breve.",
    },
    footer: {
      tagline:
        "Transporte executivo e viagens na Bahia, com conforto, pontualidade e segurança.",
      navTitle: "Navegação",
      servicesTitle: "Serviços",
      contactTitle: "Contato",
      rights: "Todos os direitos reservados.",
    },
    validation: {
      name: "Informe seu nome completo",
      email: "Informe um e-mail válido",
      phone: "Informe um telefone válido",
      service: "Selecione um serviço",
      origin: "Informe a origem",
      destination: "Informe o destino",
      date: "Informe a data",
      time: "Informe o horário",
      message: "Escreva sua mensagem",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      gallery: "Gallery",
      about: "About",
      booking: "Booking",
      contact: "Contact",
      cta: "Request a booking",
    },
    common: {
      knowMore: "Learn more",
      bookNow: "Request a booking",
      talkWhatsApp: "Chat on WhatsApp",
      allServices: "See all services",
      viewGallery: "View gallery",
      required: "Required field",
      sending: "Sending...",
    },
    home: {
      heroEyebrow: "Executive transport in Bahia",
      heroTitle: "Travel with comfort, punctuality and safety",
      heroSubtitle:
        "Executive transfers, trips to Salvador and to the coast with accredited drivers and a monitored fleet.",
      servicesEyebrow: "Our services",
      servicesTitle: "Tailored solutions for every route",
      servicesSubtitle:
        "From the airport to your meeting, from the city to the beach: we handle every detail of your journey.",
      differentialsEyebrow: "Why BPC",
      differentialsTitle: "Reliability on every mile",
      gallerySubtitle: "Our fleet, destinations and moments on the road.",
      testimonialsEyebrow: "Testimonials",
      testimonialsTitle: "Travellers who come back",
      ctaTitle: "Ready to book your trip?",
      ctaText:
        "Send us your route details and our team replies with a personalised quote.",
    },
    differentials: {
      drivers: {
        title: "Accredited drivers",
        text: "Trained, fully documented professionals, continuously evaluated.",
      },
      fleet: {
        title: "Monitored fleet",
        text: "Serviced, sanitised vehicles with real-time tracking.",
      },
      support: {
        title: "24/7 support",
        text: "Direct WhatsApp assistance before, during and after your trip.",
      },
      punctuality: {
        title: "Guaranteed punctuality",
        text: "Route planning and flight tracking so you are never late.",
      },
    },
    services: {
      pageTitle: "Services",
      pageSubtitle:
        "Executive transport and custom trips with a professional standard.",
      includedTitle: "What's included",
      forWhomTitle: "Who it's for",
      transfer: {
        name: "Executive Transfer",
        short:
          "Corporate and private transfers with executive vehicles and a dedicated driver.",
        description:
          "Door-to-door transfers to airports, hotels, meetings and events. We track your flight status, monitor traffic and adjust the route to keep you on time.",
        forWhom:
          "Executives, companies, business travel teams and passengers who value discretion and punctuality.",
        included: [
          "Bilingual driver on request",
          "Real-time flight tracking",
          "Water and Wi-Fi on board",
          "Up to 60 minutes complimentary airport waiting",
        ],
      },
      salvador: {
        name: "Trips to Salvador",
        short:
          "Comfortable journeys to Bahia's capital with a flexible itinerary and dedicated driver.",
        description:
          "Intercity trips to Salvador departing at the time you choose. Ideal for business commitments, appointments, events and flight connections, with planned stops along the way.",
        forWhom:
          "Families, groups, companies and travellers looking for a safe, comfortable alternative to conventional transport.",
        included: [
          "Pick-up at the address you choose",
          "Scheduled stops along the route",
          "Generous luggage space",
          "Discounted round-trip option",
        ],
      },
      coast: {
        name: "Trips to the Coast",
        short:
          "Beaches and coastal destinations in Bahia with comfort from start to finish.",
        description:
          "Coastal itineraries with an exclusive vehicle and a driver at your disposal, with the flexibility to shape your own day. We agree on times, stops and destinations with your group.",
        forWhom:
          "Tourists, groups of friends, families and companies organising experiences and day trips.",
        included: [
          "Custom itinerary",
          "Driver at your disposal during the tour",
          "Destination and restaurant suggestions",
          "Exclusive vehicle for your group",
        ],
      },
    },
    gallery: {
      pageTitle: "Gallery",
      pageSubtitle: "A glimpse of our fleet, destinations and journeys.",
    },
    about: {
      pageTitle: "About BPC Recreativo",
      pageSubtitle: "Executive-standard transport with genuine care for people.",
      storyTitle: "Our story",
      storyText1:
        "BPC Recreativo was created to offer a different kind of transport in Bahia: punctual, comfortable and driven by professionals who understand how much each commitment matters.",
      storyText2:
        "We serve companies, families and tourists with a focused operation in which every booking is followed closely by our team — from the first message to arrival.",
      missionTitle: "Mission",
      missionText:
        "To move people safely, punctually and hospitably, turning the journey into an enjoyable part of the trip.",
      valuesTitle: "Commitment to safety",
      valuesText:
        "Preventive maintenance, up-to-date documentation, tracking and continuous driver training are part of our routine.",
      stats: {
        years: "Years on the road",
        trips: "Trips completed",
        clients: "Clients served",
        rating: "Average rating",
      },
    },
    booking: {
      pageTitle: "Booking",
      pageSubtitle:
        "Send us your trip details and we'll reply with a personalised quote.",
      formTitle: "Trip details",
      name: "Full name",
      email: "Email",
      phone: "Phone / WhatsApp",
      service: "Service",
      selectService: "Select a service",
      origin: "Pick-up",
      destination: "Drop-off",
      date: "Date",
      time: "Time",
      passengers: "Passengers",
      luggage: "Luggage",
      roundTrip: "Round trip",
      returnDate: "Return date",
      returnTime: "Return time",
      notes: "Notes",
      notesPlaceholder: "Flight number, child seat, stops, special needs...",
      submit: "Send request",
      priceNote:
        "Prices are quoted on request, based on route, date and number of passengers.",
      successTitle: "Request sent!",
      successText:
        "We received your trip details. Our team will contact you shortly with a quote.",
      summaryTitle: "Request summary",
      sendWhatsApp: "Send summary on WhatsApp",
      newRequest: "Make another request",
      errorTitle: "Could not send",
      errorText: "Please try again or contact us on WhatsApp.",
      payTitle: "Confirm with a R$ 100 deposit",
      payText:
        "Pay the R$ 100 booking deposit to secure your date. The remaining balance is agreed with our team after we confirm the route.",
      payLoading: "Loading secure payment...",
      payError: "We could not start the payment. Please try again.",
      paidTitle: "Booking confirmed!",
      paidText:
        "Your deposit was received and your booking is confirmed. Send the summary on WhatsApp so our team can finalise the details with you.",
      pendingTitle: "Payment being processed",
      pendingText:
        "We are still confirming your payment. As soon as it clears, your booking is confirmed.",
      cancelPay: "Pay later",
      depositBadge: "Deposit R$ 100",
      steps: {
        title: "How it works",
        one: "You send your trip details through this form.",
        two: "You pay the R$ 100 deposit online to secure the date.",
        three: "You receive the confirmation on WhatsApp and by email.",
      },
    },
    contact: {
      pageTitle: "Contact",
      pageSubtitle: "Talk to our team. We reply fast.",
      formTitle: "Send a message",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      infoTitle: "Get in touch",
      whatsapp: "WhatsApp",
      emailLabel: "Email",
      hours: "Opening hours",
      hoursValue: "Every day, 24 hours",
      area: "Service area",
      areaValue: "Bahia and other destinations on request",
      successTitle: "Message sent!",
      successText: "Thanks for reaching out. We'll get back to you shortly.",
    },
    footer: {
      tagline:
        "Executive transport and travel in Bahia, with comfort, punctuality and safety.",
      navTitle: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Contact",
      rights: "All rights reserved.",
    },
    validation: {
      name: "Enter your full name",
      email: "Enter a valid email",
      phone: "Enter a valid phone number",
      service: "Select a service",
      origin: "Enter the pick-up location",
      destination: "Enter the drop-off location",
      date: "Enter the date",
      time: "Enter the time",
      message: "Write your message",
    },
  },
} as const;

export type TranslationTree = typeof translations.pt;
