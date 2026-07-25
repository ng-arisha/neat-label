import Reveal from "./Reveal";

const items = [
  {
    title: "Ground-level intelligence",
    body: "Every recommendation is grounded in current market, regulatory, and competitive realities across East Africa.",
  },
  {
    title: "Structured for investors",
    body: "Projects and businesses are packaged to the standard investors and institutions expect, from valuation to presentation.",
  },
  {
    title: "Built for AfCFTA-era trade",
    body: "Regional and continental trade advisory is designed around the frameworks reshaping how business moves across borders.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="px-6 py-16 sm:px-8 sm:py-20 lg:py-22">
      <div className="mx-auto max-w-wrap">
        <Reveal className="mb-10 max-w-xl sm:mb-12">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal-soft">
            How We Work
          </p>
          <h2 className="mb-3.5 mt-2.5 text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold">
            Advisory that carries through to delivery
          </h2>
        </Reveal>
        <Reveal className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="border-t border-gold-soft pt-4.5">
              <h3 className="mb-2 text-[1rem] font-semibold">{it.title}</h3>
              <p className="text-[0.92rem] leading-[1.75] text-ash">
                {it.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}