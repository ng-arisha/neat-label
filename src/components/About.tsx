import Reveal from "./Reveal";

const stats = [
  { n: "10", l: "Service Lines" },
  { n: "9", l: "Sectors Served" },
  { n: "EAC", l: "Regional Focus, AfCFTA-aligned" },
  { n: "360°", l: "Advisory-to-Delivery Model" },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-line bg-navy px-6 py-16 sm:px-8 sm:py-20 lg:py-22"
    >
      <Reveal className="mx-auto grid max-w-wrap items-center gap-9 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal-soft">
            Who We Are
          </p>
          <h2 className="mb-4 mt-2.5 text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold">
            A consultancy built for the region&apos;s next stage of growth
          </h2>
          <p className="mb-4 text-[1.02rem] leading-[1.8] text-ash">
            <strong className="text-cream">Neat Label Development</strong> is
            a brand growth and business consultancy helping companies,
            investors, and institutions expand across East Africa and beyond.
            We combine strategic advisory with hands-on delivery — market
            intelligence, investment structuring, trade facilitation, and
            brand development — so every engagement moves from plan to
            result.
          </p>
          <p className="text-[1.02rem] leading-[1.8] text-ash">
            Our teams work alongside businesses entering new markets,
            investors seeking credible opportunities, and public institutions
            shaping the policies and partnerships that growth depends on.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line">
          {stats.map((s) => (
            <div key={s.l} className="bg-navy-soft px-5 py-6 sm:px-6">
              <span className="block font-display text-[1.7rem] font-bold text-teal-soft">
                {s.n}
              </span>
              <span className="mt-1 block text-[0.82rem] text-ash">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}