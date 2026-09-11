import { useEffect, useState } from "react";
import { A } from "@/lib/assets";
import { slides } from "@/data/site";

export function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero-mask relative h-[720px] w-full overflow-hidden bg-navy md:h-[820px]">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center ${idx === i ? "animate-ken-burns" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/40 to-navy/20" />
        </div>
      ))}

      <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-6">
        <div key={i} className="max-w-3xl animate-fade-up">
          <p className="font-script text-[34px] leading-none text-gold md:text-[42px]">
            {slides[i].eyebrow}
            <img src={A.quill} alt="" className="ml-2 inline-block h-8 w-auto align-middle" />
          </p>
          <h1 className="mt-4 text-[32px] font-bold leading-[1.25] tracking-[1px] text-white md:text-[40px]">
            <span className="text-gold">{slides[i].highlight}</span>{" "}
            {slides[i].lines.map((l, k) => (
              <span key={k} className="block">
                {l}
              </span>
            ))}
          </h1>
        </div>
      </div>

      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className="flex items-center justify-end gap-3 text-[18px] transition-colors"
          >
            <span
              className={`h-px bg-white transition-all duration-500 ${idx === i ? "w-12 opacity-100" : "w-0 opacity-0"}`}
            />
            <span className={idx === i ? "text-white" : "text-white/45"}>
              {String(idx + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
