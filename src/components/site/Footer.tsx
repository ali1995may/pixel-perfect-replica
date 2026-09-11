import { A } from "@/lib/assets";
import { contact } from "@/data/site";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-gold">{children}</div>
  );
}

export function Footer() {
  return (
    <footer
      id="contact-us"
      className="relative bg-navy bg-cover bg-center"
      style={{ backgroundImage: `url(${A.footerBg})` }}
    >
      <div className="mx-auto max-w-[1440px] px-6 py-14">
        <img src={A.logo} alt="ABINADER Consultants and Services LLC" className="h-16 w-auto" />

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex gap-4">
            <Icon>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M6.6 3h3l1.5 4-2 1.4a12 12 0 0 0 5.5 5.5l1.4-2 4 1.5v3A2 2 0 0 1 18 18.4 15.5 15.5 0 0 1 5.6 6 2 2 0 0 1 6.6 3Z" />
              </svg>
            </Icon>
            <div>
              <h3 className="footer-title">Contact</h3>
              <p className="footer-text">Cell: {contact.cell}</p>
              <p className="footer-text">Phone: {contact.phone}</p>
              <p className="footer-text">Fax: {contact.fax}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Icon>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </Icon>
            <div>
              <h3 className="footer-title">Email</h3>
              <a href={`mailto:${contact.email}`} className="footer-text hover:text-gold">
                {contact.email}
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Icon>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5.2l3.4 2" />
              </svg>
            </Icon>
            <div>
              <h3 className="footer-title">Working Hours</h3>
              <p className="footer-text">{contact.hours}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Icon>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
            </Icon>
            <div>
              <h3 className="footer-title">Address</h3>
              {contact.address.map((l) => (
                <p key={l} className="footer-text">
                  {l}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <p className="mx-auto max-w-[1440px] px-6 py-4 text-center text-[12px] text-white/70">
          © Copyright 2011 – 2025 |{" "}
          <span className="text-gold">ABI NADER Consultants and Services LLC</span> | All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
}
