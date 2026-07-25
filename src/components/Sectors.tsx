import Reveal from "./Reveal";

const sectors = [
  "Manufacturing",
  "Agriculture & Agribusiness",
  "Mining",
  "Healthcare",
  "Infrastructure",
  "Energy",
  "Trade & Logistics",
  "Technology",
  "Humanitarian & Development Projects",
];

export default function Sectors() {
  return (
    <section
      id="sectors"
      className="border-y border-line bg-navy px-6 py-16 sm:px-8 sm:py-20 lg:py-22"
    >
      <Reveal className="mx-auto max-w-wrap">
        <div className="mb-10 max-w-xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal-soft">
            Key Sectors Served
          </p>
          <h2 className="mb-3.5 mt-2.5 text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold">
            Depth across the industries driving regional growth
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {sectors.map((s) => (
            <span
              key={s}
              className="chip flex items-center gap-2 rounded-full border border-line bg-navy-soft px-5 py-2.5 text-[0.88rem] text-cream"
            >
              {s}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}