import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { CheckCircle2, MessageCircle, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { BookingCheckout } from "@/components/BookingCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { useLanguage } from "@/i18n/LanguageProvider";
import { services, whatsappLink } from "@/data/site";
import { supabase } from "@/integrations/supabase/client";
import { getStripeEnvironment } from "@/lib/stripe";
import { toast } from "sonner";

const STORAGE_KEY = "bpc_booking_pending";

const inputClass =
  "w-full h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";
const labelClass = "block text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-2";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  origin: string;
  destination: string;
  trip_date: string;
  trip_time: string;
  round_trip: boolean;
  return_date: string;
  return_time: string;
  passengers: number;
  luggage: number;
  notes: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  origin: "",
  destination: "",
  trip_date: "",
  trip_time: "",
  round_trip: false,
  return_date: "",
  return_time: "",
  passengers: 1,
  luggage: 0,
  notes: "",
};

const Booking = () => {
  const { t, language } = useLanguage();
  const [params] = useSearchParams();
  const [form, setForm] = useState<FormState>({
    ...initialState,
    service: services.some((s) => s.id === params.get("servico")) ? params.get("servico")! : "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  const schema = z.object({
    name: z.string().trim().min(3, t("validation.name")).max(120),
    email: z.string().trim().email(t("validation.email")).max(255),
    phone: z.string().trim().min(8, t("validation.phone")).max(30),
    service: z.string().min(1, t("validation.service")),
    origin: z.string().trim().min(2, t("validation.origin")).max(160),
    destination: z.string().trim().min(2, t("validation.destination")).max(160),
    trip_date: z.string().min(1, t("validation.date")),
    trip_time: z.string().min(1, t("validation.time")),
    notes: z.string().max(1000).optional(),
  });

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const summary = (data: FormState) => {
    const serviceName = t(`services.${data.service}.name`);
    return [
      `${t("booking.summaryTitle")} — BPC Recreativo`,
      `${t("booking.name")}: ${data.name}`,
      `${t("booking.phone")}: ${data.phone}`,
      `${t("booking.email")}: ${data.email}`,
      `${t("booking.service")}: ${serviceName}`,
      `${t("booking.origin")}: ${data.origin}`,
      `${t("booking.destination")}: ${data.destination}`,
      `${t("booking.date")}: ${data.trip_date} ${data.trip_time}`,
      data.round_trip ? `${t("booking.roundTrip")}: ${data.return_date} ${data.return_time}` : "",
      `${t("booking.passengers")}: ${data.passengers} | ${t("booking.luggage")}: ${data.luggage}`,
      data.notes ? `${t("booking.notes")}: ${data.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) fieldErrors[String(issue.path[0])] = issue.message;
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    const { error } = await supabase.from("booking_requests").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      service: form.service,
      origin: form.origin.trim(),
      destination: form.destination.trim(),
      trip_date: form.trip_date,
      trip_time: form.trip_time,
      round_trip: form.round_trip,
      return_date: form.round_trip && form.return_date ? form.return_date : null,
      return_time: form.round_trip && form.return_time ? form.return_time : null,
      passengers: form.passengers,
      luggage: form.luggage,
      notes: form.notes.trim() || null,
      language,
    });
    setLoading(false);
    if (error) {
      toast.error(t("booking.errorTitle"), { description: t("booking.errorText") });
      return;
    }
    setSubmitted(form);
    setForm(initialState);
  };

  return (
    <Layout>
      <section className="bg-primary text-ice py-16 md:py-24">
        <div className="container-full">
          <p className="eyebrow">BPC Recreativo</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ice">{t("booking.pageTitle")}</h1>
          <p className="mt-4 text-ice/70 max-w-xl leading-relaxed">{t("booking.pageSubtitle")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-full grid gap-12 lg:grid-cols-[1.6fr_1fr] items-start">
          {submitted ? (
            <Reveal className="bg-card border border-border rounded-lg p-8 md:p-10">
              <CheckCircle2 className="w-10 h-10 text-secondary" />
              <h2 className="mt-4 font-serif text-3xl text-primary">{t("booking.successTitle")}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t("booking.successText")}</p>
              <pre className="mt-6 whitespace-pre-wrap rounded-md bg-muted p-5 text-sm text-foreground/80 font-sans">
                {summary(submitted)}
              </pre>
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href={whatsappLink(summary(submitted))}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-md bg-secondary text-secondary-foreground text-sm font-semibold uppercase tracking-wide hover:bg-gold-light transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t("booking.sendWhatsApp")}
                </a>
                <button
                  onClick={() => setSubmitted(null)}
                  className="inline-flex items-center h-12 px-7 rounded-md border border-border text-sm font-semibold uppercase tracking-wide text-primary hover:bg-muted transition-colors"
                >
                  {t("booking.newRequest")}
                </button>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-card border border-border rounded-lg p-6 md:p-9"
              >
                <h2 className="font-serif text-2xl text-primary">{t("booking.formTitle")}</h2>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="name">{t("booking.name")}</label>
                    <input id="name" className={inputClass} value={form.name} onChange={(e) => set("name", e.target.value)} maxLength={120} />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">{t("booking.email")}</label>
                    <input id="email" type="email" className={inputClass} value={form.email} onChange={(e) => set("email", e.target.value)} maxLength={255} />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">{t("booking.phone")}</label>
                    <input id="phone" className={inputClass} value={form.phone} onChange={(e) => set("phone", e.target.value)} maxLength={30} />
                    {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="service">{t("booking.service")}</label>
                    <select id="service" className={inputClass} value={form.service} onChange={(e) => set("service", e.target.value)}>
                      <option value="">{t("booking.selectService")}</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>{t(`services.${s.id}.name`)}</option>
                      ))}
                    </select>
                    {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="origin">{t("booking.origin")}</label>
                    <input id="origin" className={inputClass} value={form.origin} onChange={(e) => set("origin", e.target.value)} maxLength={160} />
                    {errors.origin && <p className="mt-1 text-xs text-destructive">{errors.origin}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="destination">{t("booking.destination")}</label>
                    <input id="destination" className={inputClass} value={form.destination} onChange={(e) => set("destination", e.target.value)} maxLength={160} />
                    {errors.destination && <p className="mt-1 text-xs text-destructive">{errors.destination}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="trip_date">{t("booking.date")}</label>
                    <input id="trip_date" type="date" className={inputClass} value={form.trip_date} onChange={(e) => set("trip_date", e.target.value)} />
                    {errors.trip_date && <p className="mt-1 text-xs text-destructive">{errors.trip_date}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="trip_time">{t("booking.time")}</label>
                    <input id="trip_time" type="time" className={inputClass} value={form.trip_time} onChange={(e) => set("trip_time", e.target.value)} />
                    {errors.trip_time && <p className="mt-1 text-xs text-destructive">{errors.trip_time}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="passengers">{t("booking.passengers")}</label>
                    <input id="passengers" type="number" min={1} max={60} className={inputClass} value={form.passengers} onChange={(e) => set("passengers", Number(e.target.value))} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="luggage">{t("booking.luggage")}</label>
                    <input id="luggage" type="number" min={0} max={60} className={inputClass} value={form.luggage} onChange={(e) => set("luggage", Number(e.target.value))} />
                  </div>

                  <div className="sm:col-span-2 flex items-center gap-3">
                    <input
                      id="round_trip"
                      type="checkbox"
                      className="h-4 w-4 accent-[hsl(var(--secondary))]"
                      checked={form.round_trip}
                      onChange={(e) => set("round_trip", e.target.checked)}
                    />
                    <label htmlFor="round_trip" className="text-sm text-foreground/80">{t("booking.roundTrip")}</label>
                  </div>

                  {form.round_trip && (
                    <>
                      <div>
                        <label className={labelClass} htmlFor="return_date">{t("booking.returnDate")}</label>
                        <input id="return_date" type="date" className={inputClass} value={form.return_date} onChange={(e) => set("return_date", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="return_time">{t("booking.returnTime")}</label>
                        <input id="return_time" type="time" className={inputClass} value={form.return_time} onChange={(e) => set("return_time", e.target.value)} />
                      </div>
                    </>
                  )}

                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="notes">{t("booking.notes")}</label>
                    <textarea
                      id="notes"
                      rows={4}
                      maxLength={1000}
                      placeholder={t("booking.notesPlaceholder")}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      value={form.notes}
                      onChange={(e) => set("notes", e.target.value)}
                    />
                  </div>
                </div>

                <p className="mt-6 text-xs text-muted-foreground leading-relaxed">{t("booking.priceNote")}</p>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-wide hover:bg-petrol-light transition-colors disabled:opacity-60"
                >
                  {loading ? t("common.sending") : t("booking.submit")}
                </button>
              </form>
            </Reveal>
          )}

          <Reveal delay={0.1} className="bg-muted rounded-lg p-8 lg:sticky lg:top-28">
            <h2 className="font-serif text-2xl text-primary">{t("booking.steps.title")}</h2>
            <ol className="mt-6 space-y-6">
              {["one", "two", "three"].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`booking.steps.${step}`)}
                  </p>
                </li>
              ))}
            </ol>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary hover:text-secondary transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              {t("common.talkWhatsApp")}
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
