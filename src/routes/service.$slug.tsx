import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/data/site";

export const Route = createFileRoute("/service/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s ? `${s.heroTitle.join(" ")} | ABINADER Consultants` : "ABINADER Consultants";
    const description = s?.paragraphs[0]?.slice(0, 155) ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();

  return (
    <div className="bg-white">
      <Header />

      <section className="relative h-[620px] w-full overflow-hidden bg-navy md:h-[720px]">
        <div
          className="absolute inset-0 animate-ken-burns bg-cover bg-center"
          style={{ backgroundImage: `url(${service.hero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/55 via-navy/25 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-6">
          <h1 className="animate-fade-up text-[30px] font-bold leading-tight tracking-[0.5px] text-white md:text-[40px]">
            {service.heroTitle.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_380px]">
          <Reveal className="space-y-5">
            {service.paragraphs.map((p, i) => (
              <p key={i} className="text-justify text-[15px] leading-relaxed text-body">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={120} className="lg:border-l lg:border-black/10 lg:pl-10">
            <h2 className="font-script text-[34px] leading-none text-gold">
              Legal Services We Provide
            </h2>
            <ul className="mt-6">
              {services.map((s) => {
                const active = s.slug === service.slug;
                return (
                  <li key={s.slug} className="border-b border-black/10">
                    <Link
                      to="/service/$slug"
                      params={{ slug: s.slug }}
                      className={`group flex items-start gap-3 py-4 text-[15px] leading-snug transition-colors ${
                        active ? "font-semibold text-navy" : "text-navy/80 hover:text-gold"
                      }`}
                    >
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        className="mt-1 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" />
                      </svg>
                      <span>{s.navTitle}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
