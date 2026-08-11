import { useState } from "react";
import { z } from "zod";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageProvider";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, whatsappLink } from "@/data/site";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const inputClass =
  "w-full h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";
const labelClass = "block text-xs font-semibold uppercase tracking-[0.14em] text-primary mb-2";

const Contact = () => {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(2, t("validation.name")).max(120),
    email: z.string().trim().email(t("validation.email")).max(255),
    message: z.string().trim().min(10, t("validation.message")).max(1000),
  });

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
    const { error } = await supabase.from("contact_messages").insert({ ...parsed.data, language });
    setLoading(false);
    if (error) {
      toast.error(t("booking.errorTitle"), { description: t("booking.errorText") });
      return;
    }
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const channels = [
    { Icon: MessageCircle, label: t("contact.whatsapp"), value: WHATSAPP_DISPLAY, href: whatsappLink() },
    { Icon: Mail, label: t("contact.emailLabel"), value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { Icon: Clock, label: t("contact.hours"), value: t("contact.hoursValue") },
    { Icon: MapPin, label: t("contact.area"), value: t("contact.areaValue") },
  ];

  return (
    <Layout>
      <section className="bg-primary text-ice py-16 md:py-24">
        <div className="container-full">
          <p className="eyebrow">BPC Recreativo</p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl text-ice">{t("contact.pageTitle")}</h1>
          <p className="mt-4 text-ice/70 max-w-xl leading-relaxed">{t("contact.pageSubtitle")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-full grid gap-12 lg:grid-cols-2 items-start">
          <Reveal>
            <form onSubmit={handleSubmit} noValidate className="bg-card border border-border rounded-lg p-6 md:p-9">
              <h2 className="font-serif text-2xl text-primary">{t("contact.formTitle")}</h2>
              {sent && (
                <div className="mt-5 rounded-md bg-muted p-4">
                  <p className="text-sm font-semibold text-primary">{t("contact.successTitle")}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t("contact.successText")}</p>
                </div>
              )}
              <div className="mt-6 space-y-5">
                <div>
                  <label className={labelClass} htmlFor="c-name">{t("contact.name")}</label>
                  <input id="c-name" className={inputClass} maxLength={120} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label className={labelClass} htmlFor="c-email">{t("contact.email")}</label>
                  <input id="c-email" type="email" className={inputClass} maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <label className={labelClass} htmlFor="c-message">{t("contact.message")}</label>
                  <textarea
                    id="c-message"
                    rows={5}
                    maxLength={1000}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-7 inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-wide hover:bg-petrol-light transition-colors disabled:opacity-60"
              >
                {loading ? t("common.sending") : t("contact.send")}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-2xl text-primary">{t("contact.infoTitle")}</h2>
            <ul className="mt-6 space-y-5">
              {channels.map(({ Icon, label, value, href }) => (
                <li key={label} className="flex gap-4 border-b border-border pb-5">
                  <Icon className="w-5 h-5 text-secondary mt-1 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" className="text-base text-primary hover:text-secondary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-base text-foreground/80">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 h-12 px-7 rounded-md bg-secondary text-secondary-foreground text-sm font-semibold uppercase tracking-wide hover:bg-gold-light transition-colors"
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

export default Contact;
