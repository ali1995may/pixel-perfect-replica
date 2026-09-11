import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { A } from "@/lib/assets";
import { contact, services } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* top bar */}
      <div className="hidden bg-transparent lg:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-end gap-10 px-6 py-2">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 text-[13px] text-white/90 transition-colors hover:text-gold"
          >
            <img src={A.emailIcon} alt="" className="h-4 w-4" />
            {contact.email}
          </a>
          <a
            href={contact.cellHref}
            className="flex items-center gap-3 text-[13px] text-white/90 transition-colors hover:text-gold"
          >
            <img src={A.callIcon} alt="" className="h-4 w-4" />
            {contact.cell}
          </a>
          <a
            href="#contact-us"
            className="bg-gold px-8 py-3 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-gold-dark"
          >
            Contact us
          </a>
        </div>
      </div>

      {/* nav bar */}
      <div className="border-y border-white/10 bg-navy/45 backdrop-blur-[2px]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-3">
          <Link to="/" className="shrink-0">
            <img
              src={A.logo}
              alt="ABINADER Consultants and Services LLC"
              className="h-12 w-auto lg:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/" hash="about-us" className="nav-link">
              About Us
            </Link>
            <div
              className="group relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link to="/" hash="services" className="nav-link flex items-center gap-2">
                Services
                <svg
                  className={`h-3 w-3 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 12 8"
                  fill="none"
                >
                  <path d="M1 1.5 6 6.5l5-5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
              <div
                className={`absolute left-0 top-full w-[360px] origin-top border-t-2 border-gold bg-navy/95 py-2 shadow-2xl transition-all duration-300 ${
                  servicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/service/$slug"
                    params={{ slug: s.slug }}
                    className="block px-5 py-3 text-[14px] leading-snug text-white/85 transition-colors hover:bg-white/5 hover:text-gold"
                  >
                    {s.navTitle}
                  </Link>
                ))}
              </div>
            </div>
            <a href="#contact-us" className="nav-link">
              Contact us
            </a>
          </nav>

          <button
            aria-label="Menu"
            onClick={() => setOpen(true)}
            className="text-white lg:hidden"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-navy/98 transition-opacity duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <img src={A.logo} alt="" className="h-12 w-auto" />
          <button aria-label="Close" onClick={() => setOpen(false)} className="text-white">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-6 py-6">
          <Link to="/" onClick={() => setOpen(false)} className="mobile-link">
            Home
          </Link>
          <Link to="/" hash="about-us" onClick={() => setOpen(false)} className="mobile-link">
            About Us
          </Link>
          <span className="mobile-link text-gold">Services</span>
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/service/$slug"
              params={{ slug: s.slug }}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-3 pl-4 text-[14px] leading-snug text-white/80"
            >
              {s.navTitle}
            </Link>
          ))}
          <a href="#contact-us" onClick={() => setOpen(false)} className="mobile-link">
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}
