import { Reveal } from "./Reveal";

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) => (
  <Reveal className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
    {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
    <h2
      className={`font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-tight ${
        light ? "text-ice" : "text-primary"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-base leading-relaxed ${light ? "text-ice/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
  </Reveal>
);
