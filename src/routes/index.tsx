import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroSlider } from "@/components/site/HeroSlider";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Reveal } from "@/components/site/Reveal";
import { A } from "@/lib/assets";
import { services } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABINADER – Consultants and Services LLC | Lebanese Legal Consultancy" },
      {
        name: "description",
        content:
          "Expert consultancy support on Lebanese and international laws. Inheritance, real estate, commercial and corporate legal services for the Lebanese diaspora in Florida.",
      },
      { property: "og:title", content: "ABINADER – Consultants and Services LLC" },
      {
        property: "og:description",
        content:
          "Expert consultancy support on Lebanese and international laws that you can count on for effective solutions in Lebanon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const bullets = [
  "Experienced, Knowledgeable and tailored legal Consultancy",
  "Client-focused Approach",
  "Multilingual Services (English / Arabic / French )",
  "Dedicated Consultants Professionally Equipped With The Right Knowledge and Solutions To Assist You In Various Legal Matters In Lebanon",
];

function BulletIcon({ i }: { i: number }) {
  const paths = [
    "M12 3a6 6 0 0 0-3.5 10.9V17h7v-3.1A6 6 0 0 0 12 3Zm-2 16h4m-3.5 2h3",
    "M4 18c1.5-3 4.5-4 8-4s6.5 1 8 4M12 3l1.4 2.9 3.1.4-2.3 2.2.6 3.1L12 10.1 9.2 11.6l.6-3.1L7.5 6.3l3.1-.4Z",
    "M6 4l6 6m-6 8 12-12M14 14l4 4",
    "M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-8 18a8 8 0 0 1 16 0",
  ];
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className="shrink-0 text-gold"
    >
      <path d={paths[i]} />
    </svg>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-[17px] font-bold uppercase leading-relaxed tracking-[0.4px] text-navy md:text-[19px]">
        {children}
      </h2>
      <img src={A.divider} alt="" className="mt-3 h-3 w-16" />
    </div>
  );
}

function Home() {
  return (
    <div className="bg-white">
      <Header />
      <HeroSlider />

      {/* About */}
      <section
        id="about-us"
        className="scroll-mt-24 bg-navy bg-cover bg-center py-16"
        style={{ backgroundImage: `url(${A.aboutBg})` }}
      >
        <div className="mx-auto grid max-w-[1440px] items-start gap-10 px-6 lg:grid-cols-[300px_minmax(0,1fr)_360px]">
          <Reveal>
            <img src={A.walid} alt="Walid Abi Nader" className="w-full object-cover" />
          </Reveal>

          <Reveal delay={120}>
            <h2 className="text-[22px] font-semibold uppercase leading-snug text-white">
              Our <span className="text-gold">Expertise Delivers</span> Results and Secures Your
              Interests
            </h2>
            <p className="mt-5 text-justify text-[15px] leading-relaxed text-white/85">
              Walid Abi Nader is authorized as Foreign Legal Consultant registered at the Florida
              Bar and is Attorney at Law registered at the Beirut Bar. Walid has an extensive
              experience in Lebanese Laws in the fields of Real Estate, Will and Estates,
              Inheritance, Civil Personal Status Law, Commercial Law, Corporate, companies formation
              in Lebanon, Contracts Drafting, Mergers and Acquisitions, Arbitration, Construction
              (FIDIC, EPC), International transport of persons and carriage of goods under
              international applicable conventions (maritime, air, multimodal), Franchising,
              Commercial Representation, etc.
            </p>
            <p className="mt-3 text-justify text-[15px] leading-relaxed text-white/85">
              Walid puts his years of experience to provide consultancy services in Lebanese Law for
              his clients in Florida.
            </p>
          </Reveal>

          <div className="space-y-7">
            {bullets.map((b, i) => (
              <Reveal key={b} delay={200 + i * 100}>
                <div className="flex items-start gap-4">
                  <BulletIcon i={i} />
                  <p className="text-[15px] leading-relaxed text-white/90">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Intro copy */}
      <section className="relative overflow-hidden bg-cream py-20">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[520px] -translate-x-1/2 justify-center md:flex">
          <div className="lady-justice" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-6">
          <Reveal>
            <SectionTitle>
              Are you facing an inheritance, will and estate or real estate‑related legal issue in
              Lebanon?
              <span className="mt-3 block">
                Are you intending to do business in or expand your activities to Lebanon?
              </span>
            </SectionTitle>
            <p className="text-justify text-[15px] leading-relaxed text-body">
              At Abinader Consultants and Services LLC, we provide our clients and the Lebanese
              Diaspora in Florida experienced, knowledgeable and tailored legal consultancy and
              services, with high professionalism, designed to protect your interests and giving you
              peace of mind, in the fields of Lebanese Inheritance Law, Inheritance Disputes, Will
              and Estate, Real Estate Law, Corporate Law and Company Formation in Lebanon (Business
              Entity Selection &amp; Guidance for Setup of new company, Entity Structure Guidance),
              Commercial Law and International Commercial Transactions involving Lebanon or Lebanese
              laws and Contracts Drafting.
            </p>
            <p className="mt-2 text-justify text-[15px] leading-relaxed text-body">
              Initiation, execution and follow-up of such is professionally made through our main
              partner “Abi Nader Law Firm”, in Lebanon, and other reputable and well-known law
              offices.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12">
              <SectionTitle>
                Are you intending to reclaim your Lebanese nationality or apply to obtain your
                Lebanese identity card?
              </SectionTitle>
              <p className="text-justify text-[15px] leading-relaxed text-body">
                At Abinader Consultants and Services LLC, we provide comprehensive legal consultancy
                and services in the field of Civil Personal Status Law, for people of Lebanese
                heritage to apply for Lebanese Nationality and to benefit from their personal,
                social and political rights as Lebanese. We firmly gained traction from many clients
                seeking help and consultancy on Civil Personal Status matters in Lebanon.
                Initiation, execution and follow-up of all of our legal consultancy and advisory is
                professionally made through our main partner “Abi Nader Law Firm”, in Lebanon, and
                other reputable and well-known lawyers and law offices.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12">
              <SectionTitle>Serving Orlando, Miami, Tampa and all of Central Florida</SectionTitle>
              <p className="italic text-[15px] leading-relaxed text-gold">
                Dedicated to provide advice with high professionalism on best ways and means to
                Defending Your Rights &amp; Protecting Your Interests
              </p>
              <p className="mt-3 text-[18px] font-bold text-navy">
                We Deliver Excellent Service Through Every Phase of Representation
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <h2 className="text-center font-script text-[44px] leading-none text-gold md:text-[54px]">
              Legal Services We Provide
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
