import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-9 sm:px-8">
      <div className="mx-auto flex max-w-wrap flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.jpg"
            alt="Neat Label Development"
            width={26}
            height={26}
            className="h-6.5 w-auto rounded-sm"
          />
          <span className="font-display text-[0.85rem] tracking-[0.04em] text-ash">
            NEAT LABEL DEVELOPMENT
          </span>
        </div>
        <div className="text-[0.82rem] text-ash">
          Diamond Plaza Annex, Parklands, Nairobi <span className="mx-1">|</span>{" "}
          
            <a href="tel:+254798088681"
            className="text-teal-soft no-underline hover:underline"
          >
            +254 798 088 681
          </a>
        </div>
      </div>
    </footer>
  );
}