"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Node = {
  name: string;
  sectors: string[];
  blurb: string;
  x: number;
  y: number;
};

const CENTER = { x: 300, y: 300 };

const NODES: Node[] = [
  {
    name: "Ethiopia",
    sectors: ["Manufacturing", "Infrastructure"],
    blurb:
      "Manufacturing corridors and infrastructure-linked advisory across the Horn of Africa.",
    x: 300,
    y: 90,
  },
  {
    name: "Somalia",
    sectors: ["Trade & Logistics", "Energy"],
    blurb: "Coastal trade facilitation and logistics into the wider Horn.",
    x: 448.5,
    y: 151.5,
  },
  {
    name: "Tanzania",
    sectors: ["Mining", "Trade & Logistics"],
    blurb:
      "Mining-sector advisory and port-linked trade corridors via Dar es Salaam.",
    x: 510,
    y: 300,
  },
  {
    name: "Zambia",
    sectors: ["Agriculture & Agribusiness", "Mining"],
    blurb:
      "Agribusiness and copperbelt mining engagements further into Southern Africa.",
    x: 448.5,
    y: 448.5,
  },
  {
    name: "DR Congo",
    sectors: ["Mining", "Humanitarian & Development Projects"],
    blurb:
      "Resource-sector advisory alongside development and humanitarian programming.",
    x: 300,
    y: 510,
  },
  {
    name: "South Sudan",
    sectors: ["Humanitarian & Development Projects", "Infrastructure"],
    blurb: "Development-partner coordination and infrastructure project support.",
    x: 151.5,
    y: 448.5,
  },
  {
    name: "Uganda",
    sectors: ["Agriculture & Agribusiness", "Energy"],
    blurb: "Agribusiness aggregation and energy-sector market entry support.",
    x: 90,
    y: 300,
  },
  {
    name: "Rwanda",
    sectors: ["Technology", "Healthcare"],
    blurb: "Tech-enabled business support and healthcare-sector partnerships.",
    x: 151.5,
    y: 151.5,
  },
];

export default function TradeMap() {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? NODES[active] : null;

  return (
    <section
      id="where-we-work"
      className="px-6 py-16 sm:px-8 sm:py-20 lg:py-22"
    >
      <div className="mx-auto max-w-wrap">
        <Reveal className="mb-10 max-w-xl sm:mb-12">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal-soft">
            Where We Work
          </p>
          <h2 className="mb-3.5 mt-2.5 text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold">
            A regional network, coordinated from Nairobi
          </h2>
          <p className="leading-[1.7] text-ash">
            Hover or tap a market to see the sectors and engagement we run
            there. Nairobi is home base — every spoke is coordinated through
            it.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div className="mx-auto w-full max-w-130">
            <svg
              viewBox="0 0 600 600"
              className="block h-auto w-full"
              role="img"
              aria-label="Diagram of regional markets connected to a Nairobi hub"
            >
              {NODES.map((n, i) => (
                <line
                  key={n.name}
                  x1={CENTER.x}
                  y1={CENTER.y}
                  x2={n.x}
                  y2={n.y}
                  stroke={active === i ? "#1ab5a8" : "#9fb3bd"}
                  strokeOpacity={active === i ? 0.9 : 0.22}
                  strokeWidth={active === i ? 2 : 1}
                  className="transition-all duration-300"
                />
              ))}

              {NODES.map((n, i) => (
                <g
                  key={n.name}
                  role="button"
                  tabIndex={0}
                  aria-label={`${n.name}: ${n.sectors.join(", ")}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setActive(i);
                  }}
                  className="cursor-pointer outline-none"
                >
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={active === i ? 30 : 24}
                    fill={active === i ? "#1ab5a8" : "#12233a"}
                    stroke={active === i ? "#7fd9d0" : "#9fb3bd"}
                    strokeOpacity={active === i ? 1 : 0.4}
                    strokeWidth="1.4"
                    className="transition-all duration-300"
                  />
                  <text
                    x={n.x}
                    y={n.y + 46}
                    textAnchor="middle"
                    className="select-none"
                    fill={active === i ? "#f5f1e6" : "#9fb3bd"}
                    fontSize="15"
                    fontWeight={active === i ? 700 : 500}
                  >
                    {n.name}
                  </text>
                </g>
              ))}

              {/* center hub */}
              <circle
                cx={CENTER.x}
                cy={CENTER.y}
                r="38"
                fill="#0d1b2a"
                stroke="#c9a84c"
                strokeWidth="1.6"
              />
              <circle cx={CENTER.x} cy={CENTER.y} r="30" fill="#1ab5a8" />
              <text
                x={CENTER.x}
                y={CENTER.y - 4}
                textAnchor="middle"
                fill="#04120f"
                fontSize="14"
                fontWeight="700"
              >
                Nairobi
              </text>
              <text
                x={CENTER.x}
                y={CENTER.y + 12}
                textAnchor="middle"
                fill="#04120f"
                fontSize="11"
                fontWeight="600"
              >
                HQ
              </text>
            </svg>
          </div>

          <div className="rounded-lg border border-line bg-navy-soft p-6 sm:p-7">
            {current ? (
              <>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal-soft">
                  Active Market
                </p>
                <h3 className="mb-3 mt-2 font-display text-[1.3rem] font-bold text-cream">
                  {current.name}
                </h3>
                <div className="mb-4 flex flex-wrap gap-2">
                  {current.sectors.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line bg-navy px-3 py-1 text-[0.78rem] text-ash"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="text-[0.95rem] leading-[1.75] text-ash">
                  {current.blurb}
                </p>
              </>
            ) : (
              <>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal-soft">
                  Nairobi — HQ
                </p>
                <h3 className="mb-3 mt-2 font-display text-[1.3rem] font-bold text-cream">
                  Full service-line coverage
                </h3>
                <p className="text-[0.95rem] leading-[1.75] text-ash">
                  Nairobi is our base of operations, with full coverage across
                  all ten service lines. Hover or tap any of the eight markets
                  around the diagram to see the sectors and work we run
                  there.
                </p>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}