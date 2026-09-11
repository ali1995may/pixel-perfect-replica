import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to="/service/$slug"
      params={{ slug: service.slug }}
      className="group relative block h-[210px] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[900ms] ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${service.card})` }}
      />
      <div className="absolute inset-0 bg-navy/60 transition-colors duration-500 group-hover:bg-navy/75" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
        <img
          src={service.icon}
          alt=""
          className="h-14 w-14 transition-transform duration-500 group-hover:-translate-y-1"
        />
        <h3 className="text-[17px] font-semibold leading-snug text-white">
          {service.cardTitle}
        </h3>
      </div>
      <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
    </Link>
  );
}
