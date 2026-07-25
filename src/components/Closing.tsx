export default function Closing() {
    return (
      <section className="relative overflow-hidden px-6 py-20 text-center sm:px-8 sm:py-24 lg:py-25">
        <div
          className="absolute inset-0 z-0 bg-closing-radial"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-wrap">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal-soft">
            Neat Label Development
          </p>
          <h2 className="mx-auto mb-4.5 mt-3.5 max-w-2xl text-[clamp(1.5rem,3vw,2.2rem)] font-bold">
            Helping brands to expand in the East African region — as it should
            be done.
          </h2>
          <p className="mx-auto mb-7 max-w-lg leading-[1.7] text-ash">
            Wherever your growth ambitions sit — market entry, investment,
            trade, or brand — our team is built to move it forward.
          </p>
          
           <a href="tel:+254798088681"
            className="inline-flex items-center gap-2 rounded-[3px] bg-btn-primary px-6 py-3.5 text-[0.88rem] font-semibold tracking-[0.03em] text-[#04120f] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(26,181,168,0.28)]"
          >
            Start a Conversation
          </a>
        </div>
      </section>
    );
  }