import Image from "next/image";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-ink/82 backdrop-blur-md">
      <div className="mx-auto flex max-w-wrap items-center justify-between px-6 py-3.5 sm:px-8">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.jpg"
            alt="Neat Label Development logo"
            width={34}
            height={34}
            className="h-8.5 w-auto rounded-sm"
            priority
          />
          <span className="whitespace-nowrap text-[0.95rem] font-bold tracking-wide">
            NEAT <b className="text-teal">LABEL</b> DEVELOPMENT
          </span>
        </div>
        <div className="hidden gap-7 text-[0.85rem] text-ash md:flex">
          <a href="#about" className="transition-colors hover:text-teal-soft">
            About
          </a>
          
           <a href="#services"
            className="transition-colors hover:text-teal-soft"
          >
            Services
          </a>
          
           <a href="#sectors"
            className="transition-colors hover:text-teal-soft"
          >
            Sectors
          </a>
          
           <a href="#approach"
            className="transition-colors hover:text-teal-soft"
          >
            Approach
          </a>
        </div>
      </div>
    </nav>
  );
}