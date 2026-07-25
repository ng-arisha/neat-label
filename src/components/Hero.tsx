import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative isolate overflow-hidden px-6 py-24 sm:px-8 sm:py-28 lg:py-32">
      <div
        className="absolute inset-0 -z-20 bg-hero-radial"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        aria-hidden="true"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid slice"
        >
          <polygon
            points="180,-20 340,-20 620,340 460,340"
            fill="#c9a84c"
            opacity="0.06"
          />
          <polygon
            points="420,-20 580,-20 900,420 740,420"
            fill="#1ab5a8"
            opacity="0.07"
          />
        </svg>
      </div>

      <div className="mx-auto grid max-w-wrap justify-items-center gap-6 text-center">
        <Image
          src="/logo.jpg"
          alt="Neat Label Development"
          width={220}
          height={175}
          className="h-auto w-[min(220px,42vw)] rounded-lg drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
          priority
        />
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal-soft">
          Brand Growth &amp; Business Consultancy
        </p>
        <h1 className="max-w-3xl text-[clamp(1.9rem,4.4vw,3.15rem)] font-bold leading-[1.14] tracking-[-0.01em]">
          Helping brands{" "}
          <span className="bg-hero-accent bg-clip-text text-transparent">
            expand across East Africa
          </span>{" "}
          — as it should be done.
        </h1>
        <p className="max-w-xl text-[1.05rem] leading-[1.7] text-ash">
          Neat Label Development pairs on-the-ground market knowledge with
          rigorous advisory discipline, guiding businesses, investors, and
          institutions through every stage of regional growth — from first
          market entry to full-scale operation.
        </p>
        <div className="mt-1.5 flex flex-wrap justify-center gap-4">
          
           <a href="#services"
            className="inline-flex items-center gap-2 rounded-[3px] bg-btn-primary px-6 py-3.5 text-[0.88rem] font-semibold tracking-[0.03em] text-[#04120f] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(26,181,168,0.28)]"
          >
            Explore Our Services
          </a>
          
           <a href="#sectors"
            className="inline-flex items-center gap-2 rounded-[3px] border border-line px-6 py-3.5 text-[0.88rem] font-semibold tracking-[0.03em] text-cream transition-transform hover:-translate-y-0.5"
          >
            Sectors We Serve
          </a>
        </div>
      </div>
    </header>
  );
}