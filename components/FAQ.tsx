import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/faq";

interface FAQProps {
  items: FaqItem[];
  eyebrow: string;
  title: string;
  subtitle?: string;
  variant?: "light" | "dark";
}

const styles = {
  light: {
    section: "bg-[#F5F7FA]",
    eyebrow: "bg-blue-50 text-blue-600",
    title: "text-[#0A2540]",
    subtitle: "text-gray-500",
    item: "border-gray-200 bg-white shadow-sm open:shadow-lg open:shadow-blue-900/5",
    question: "text-[#0A2540]",
    icon: "bg-blue-50 text-blue-600",
    answer: "text-gray-600",
  },
  dark: {
    section: "",
    eyebrow: "border border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
    title: "text-white",
    subtitle: "text-blue-100/75",
    item: "border-white/15 bg-white/10 backdrop-blur-md open:bg-white/[0.14]",
    question: "text-white",
    icon: "bg-cyan-300/15 text-cyan-200",
    answer: "text-blue-100/85",
  },
};

// Native <details> keeps every answer in the server HTML, so crawlers read it without running JS
export default function FAQ({ items, eyebrow, title, subtitle, variant = "light" }: FAQProps) {
  const s = styles[variant];

  return (
    <section id="perguntas-frequentes" className={`relative py-24 ${s.section}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full mb-4 ${s.eyebrow}`}
          >
            {eyebrow}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold leading-tight ${s.title}`}>{title}</h2>
          {subtitle && <p className={`mt-4 text-lg ${s.subtitle}`}>{subtitle}</p>}
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className={`group rounded-2xl border transition-all duration-300 ${s.item}`}
            >
              <summary
                className={`flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 font-semibold [&::-webkit-details-marker]:hidden ${s.question}`}
              >
                <h3 className="text-base sm:text-lg">{item.question}</h3>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-open:rotate-180 ${s.icon}`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <p className={`px-5 pb-5 sm:px-6 sm:pb-6 -mt-1 leading-relaxed ${s.answer}`}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
