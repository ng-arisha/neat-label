import Reveal from "./Reveal";

type Service = {
  slug: string;
  title: string;
  items: string[];
  icon: React.ReactNode;
};

const iconProps = {
  viewBox: "0 0 24 24",
  className: "h-[22px] w-[22px] stroke-teal-soft fill-none stroke-[1.6]",
};

const services: Service[] = [
  {
    slug: "business-growth-market-entry",
    title: "Business Growth & Market Entry",
    items: [
      "Market entry strategies for East African markets",
      "Business expansion planning",
      "Go-to-market strategy development",
      "Market intelligence and feasibility studies",
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M3 17l6-6 4 4 8-9" />
        <path d="M15 6h6v6" />
      </svg>
    ),
  },
  {
    slug: "investment-promotion-advisory",
    title: "Investment Promotion & Advisory",
    items: [
      "Investor sourcing and matchmaking",
      "Public-Private Partnership (PPP) advisory",
      "Investment project packaging",
      "Business valuation and investment readiness",
    ],
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 7v10M9 10c0-1.4 1.3-2 3-2s3 .8 3 2-1.3 1.8-3 2-3 .8-3 2 1.3 2 3 2 3-.6 3-2" />
      </svg>
    ),
  },
  {
    slug: "trade-export-development",
    title: "Trade & Export Development",
    items: [
      "Export market identification",
      "Cross-border trade facilitation",
      "Trade missions and B2B matchmaking",
      "AfCFTA and regional trade advisory",
    ],
    icon: (
      <svg {...iconProps}>
        <ellipse cx="12" cy="12" rx="9" ry="4.5" />
        <path d="M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9s1.3-6.5 3.8-9zM3.5 9.5h17M3.5 14.5h17" />
      </svg>
    ),
  },
  {
    slug: "business-consultancy",
    title: "Business Consultancy",
    items: [
      "Business strategy development",
      "Corporate restructuring",
      "Business process improvement",
      "Strategic partnerships and joint ventures",
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l2.6 5.8L21 9.5l-4.5 4.2 1.2 6.3L12 17l-5.7 3 1.2-6.3L3 9.5l6.4-.7z" />
      </svg>
    ),
  },
  {
    slug: "research-market-intelligence",
    title: "Research & Market Intelligence",
    items: [
      "Industry and sector research",
      "Competitor analysis",
      "Consumer and market trend analysis",
      "Economic and investment reports",
    ],
    icon: (
      <svg {...iconProps}>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M15.3 15.3L21 21" />
        <path d="M7.5 10.5h6M10.5 7.5v6" />
      </svg>
    ),
  },
  {
    slug: "procurement-supply-chain-advisory",
    title: "Procurement & Supply Chain Advisory",
    items: [
      "Strategic sourcing",
      "International procurement support",
      "Supplier identification and verification",
      "Supply chain optimization",
    ],
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="4" width="7" height="7" rx="1" />
        <rect x="13" y="4" width="7" height="7" rx="1" />
        <rect x="4" y="13" width="7" height="7" rx="1" />
        <rect x="13" y="13" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    slug: "project-development-management",
    title: "Project Development & Management",
    items: [
      "Project concept development",
      "Proposal writing",
      "Project coordination",
      "Monitoring and evaluation support",
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M4 20V10M11 20V4M18 20v-7" />
      </svg>
    ),
  },
  {
    slug: "marketing-brand-development",
    title: "Marketing & Brand Development",
    items: [
      "Brand strategy",
      "Corporate identity development",
      "Marketing strategy",
      "Corporate profile development and investment decks",
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M4 10l14-6v16L4 14z" />
        <path d="M4 10v4" />
      </svg>
    ),
  },
  {
    slug: "government-institutional-advisory",
    title: "Government & Institutional Advisory",
    items: [
      "Public sector engagement",
      "Policy and regulatory advisory",
      "Stakeholder engagement",
      "Development partner coordination",
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M4 21V10h4v11M10 21V6h4v15M16 21v-8h4v8" />
      </svg>
    ),
  },
  {
    slug: "business-networking-representation",
    title: "Business Networking & Representation",
    items: [
      "Business representation in East Africa",
      "Corporate networking",
      "Investor relations",
      "Strategic introductions and partnership facilitation",
    ],
    icon: (
      <svg {...iconProps}>
        <circle cx="6" cy="7" r="2.4" />
        <circle cx="18" cy="7" r="2.4" />
        <circle cx="12" cy="18" r="2.4" />
        <path d="M7.9 8.6L10.5 16M16.1 8.6L13.5 16M8.4 7h7.2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-16 sm:px-8 sm:py-20 lg:py-22">
      <div className="mx-auto max-w-wrap">
        <Reveal className="mb-10 max-w-xl sm:mb-12">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal-soft">
            What We Do
          </p>
          <h2 className="mb-3.5 mt-2.5 text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold">
            Ten disciplines, one growth mandate
          </h2>
          <p className="leading-[1.7] text-ash">
            Every service is built to move a client forward on the ground in
            East Africa — from first feasibility study to full market
            presence.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              id={s.slug}
              className="scroll-mt-24 bg-navy px-6 pb-7 pt-8 transition-colors duration-300 ease-out hover:bg-navy-soft target:bg-navy-soft target:ring-1 target:ring-inset target:ring-teal/40 sm:px-8"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-[10px] border border-teal/28 bg-teal/10">
                  {s.icon}
                </div>
                <h3 className="pt-1.5 text-[1.08rem] font-semibold text-cream">
                  {s.title}
                </h3>
              </div>
              <ul className="list-none text-[0.92rem] leading-[1.9] text-ash">
                {s.items.map((item) => (
                  <li key={item} className="service-card-li">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}