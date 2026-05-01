function Footer() {
  return (
    <footer className="bg-[#06131a] px-16 py-28 text-[#d8d0c4]">
      <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-24">
        <div>
          <h2 className="font-serif text-3xl font-semibold text-[#d8d0c4]">
            TripWeaver
          </h2>

          <p className="mt-7 max-w-[260px] text-xl leading-[1.7] text-[#4f7881]">
            AI travel planning for people who care how their days feel.
          </p>
        </div>

        <FooterColumn
          title="PRODUCT"
          links={["How it works", "Destinations", "Pricing", "Mobile app"]}
        />

        <FooterColumn
          title="COMPANY"
          links={["About", "Blog", "Press", "Careers"]}
        />

        <FooterColumn
          title="LEGAL"
          links={["Privacy", "Terms", "Cookie policy"]}
        />
      </div>

      <div className="mt-28 border-t border-white/8 pt-12">
        <div className="flex items-center justify-between text-sm tracking-[0.18em] text-white/18">
          <p>© 2026 TripWeaver. All rights reserved.</p>
          <p>
            Made with <span className="text-[#d99a43]">♥</span> for curious
            travelers
          </p>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: string[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-7 text-xs font-medium tracking-[0.45em] text-white/25">
        {title}
      </h3>

      <ul className="space-y-5">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-lg text-white/25 transition-colors duration-300 hover:text-[#d99a43]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
