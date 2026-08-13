import serviceTransferImage from "@/assets/service-transfer.jpg";
import serviceSalvadorImage from "@/assets/service-salvador.jpg";

export const WHATSAPP_NUMBER = "557191269417";
export const WHATSAPP_DISPLAY = "+55 71 91269417";
/* TODO: substituir pelo e-mail oficial de reservas */
export const CONTACT_EMAIL = "reservas@bpcrecreativo.com.br";
export const COMPANY_NAME = "BPC Recreativo";
export const SERVICE_AREA = "Bahia, Brasil";

export const whatsappLink = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export type ServiceId = "transfer" | "salvador" | "coast";

export interface Service {
  id: ServiceId;
  slug: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "transfer",
    slug: "transfer-executivo",
    image: serviceTransferImage,
  },
  {
    id: "salvador",
    slug: "viagens-salvador",
    image: serviceSalvadorImage,
  },
  {
    id: "coast",
    slug: "viagens-litoral",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  },
];

export const heroImage =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80";

export const aboutImage =
  "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1400&q=80";

export interface GalleryImage {
  src: string;
  alt: { pt: string; en: string };
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    alt: { pt: "Van executiva pronta para embarque", en: "Executive van ready for boarding" },
  },
  {
    src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    alt: { pt: "Estrada litorânea ao amanhecer", en: "Coastal road at sunrise" },
  },
  {
    src: "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1200&q=80",
    alt: { pt: "Interior confortável do veículo executivo", en: "Comfortable executive vehicle interior" },
  },
  {
    src: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?auto=format&fit=crop&w=1200&q=80",
    alt: { pt: "Centro histórico de Salvador", en: "Historic centre of Salvador" },
  },
  {
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    alt: { pt: "Praia do litoral baiano", en: "Beach on the Bahia coast" },
  },
  {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    alt: { pt: "Embarque no aeroporto", en: "Airport pick-up" },
  },
  {
    src: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=1200&q=80",
    alt: { pt: "Recepção de passageiros em hotel", en: "Guest pick-up at a hotel" },
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    alt: { pt: "Rodovia rumo ao destino", en: "Highway towards the destination" },
  },
  {
    src: "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&w=1200&q=80",
    alt: { pt: "Grupo corporativo em viagem", en: "Corporate group travelling" },
  },
];

export interface Testimonial {
  name: string;
  role: { pt: string; en: string };
  quote: { pt: string; en: string };
}

export const testimonials: Testimonial[] = [
  {
    name: "Marina Andrade",
    role: { pt: "Gerente de eventos", en: "Events manager" },
    quote: {
      pt: "Contratamos a BPC para transportar nossa equipe durante três dias de evento. Pontualidade impecável e motoristas atenciosos do começo ao fim.",
      en: "We hired BPC to move our team during a three-day event. Impeccable punctuality and attentive drivers from start to finish.",
    },
  },
  {
    name: "Rodrigo Lima",
    role: { pt: "Executivo comercial", en: "Sales executive" },
    quote: {
      pt: "Uso o transfer executivo toda semana. O carro sempre limpo, o motorista acompanhando o voo e zero preocupação com horários.",
      en: "I use the executive transfer every week. Always a clean car, the driver tracking my flight and zero worry about timing.",
    },
  },
  {
    name: "Carla e família",
    role: { pt: "Viagem ao litoral", en: "Trip to the coast" },
    quote: {
      pt: "Fizemos um passeio ao litoral com as crianças. Roteiro flexível, veículo confortável e um cuidado enorme com a nossa segurança.",
      en: "We took a coastal trip with the kids. Flexible itinerary, comfortable vehicle and great care with our safety.",
    },
  },
];

export const stats = [
  { value: "10+", key: "years" },
  { value: "5.000+", key: "trips" },
  { value: "1.200+", key: "clients" },
  { value: "4,9/5", key: "rating" },
] as const;
