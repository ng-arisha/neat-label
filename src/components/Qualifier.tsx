"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { services } from "./services-data";

type Option = { label: string; next: string };
type Question = { id: string; prompt: string; options: Option[] };

const QUESTIONS: Record<string, Question> = {
  start: {
    id: "start",
    prompt: "Which best describes you?",
    options: [
      { label: "A business expanding into new markets", next: "biz" },
      { label: "An investor exploring opportunities", next: "invest" },
      { label: "A government or institutional body", next: "gov" },
      {
        label: "Not sure yet — just exploring",
        next: "result:business-consultancy,research-market-intelligence",
      },
    ],
  },
  biz: {
    id: "biz",
    prompt: "What's your current stage?",
    options: [
      {
        label: "Just exploring a new market",
        next: "result:business-growth-market-entry,research-market-intelligence",
      },
      {
        label: "Ready to enter, need trade or structuring support",
        next: "result:trade-export-development,business-consultancy",
      },
      {
        label: "Already operating, want to grow further",
        next: "result:business-consultancy,marketing-brand-development",
      },
      {
        label: "Need stronger brand & marketing",
        next: "result:marketing-brand-development,research-market-intelligence",
      },
    ],
  },
  invest: {
    id: "invest",
    prompt: "What kind of opportunity are you looking at?",
    options: [
      {
        label: "Sourcing investable projects or businesses",
        next: "result:investment-promotion-advisory,research-market-intelligence",
      },
      {
        label: "Structuring or packaging a specific deal",
        next: "result:investment-promotion-advisory,project-development-management",
      },
      {
        label: "A PPP or public infrastructure opportunity",
        next: "result:investment-promotion-advisory,government-institutional-advisory",
      },
    ],
  },
  gov: {
    id: "gov",
    prompt: "What kind of support do you need?",
    options: [
      {
        label: "Policy or regulatory advisory",
        next: "result:government-institutional-advisory",
      },
      {
        label: "Partner or investor sourcing",
        next: "result:government-institutional-advisory,investment-promotion-advisory",
      },
      {
        label: "Project design & delivery support",
        next: "result:project-development-management,procurement-supply-chain-advisory",
      },
    ],
  },
};

export default function Qualifier() {
  const [trail, setTrail] = useState<string[]>(["start"]);
  const [result, setResult] = useState<string[] | null>(null);

  const currentId = trail[trail.length - 1];
  const current = QUESTIONS[currentId];

  function choose(next: string) {
    if (next.startsWith("result:")) {
      setResult(next.replace("result:", "").split(","));
    } else {
      setTrail((t) => [...t, next]);
    }
  }

  function goBack() {
    setResult(null);
    setTrail((t) => (t.length > 1 ? t.slice(0, -1) : t));
  }

  function restart() {
    setResult(null);
    setTrail(["start"]);
  }

  const recommended = result
    ? services.filter((s) => result.includes(s.slug))
    : [];

  return (
    <section
      id="find-your-fit"
      className="border-y border-line bg-navy px-6 py-16 sm:px-8 sm:py-20 lg:py-22"
    >
      <div className="mx-auto max-w-wrap">
        <Reveal className="mb-10 max-w-xl sm:mb-12">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal-soft">
            Find Your Starting Point
          </p>
          <h2 className="mb-3.5 mt-2.5 text-[clamp(1.5rem,2.6vw,2.1rem)] font-bold">
            Not sure which service line fits? Answer two quick questions.
          </h2>
        </Reveal>

        <Reveal className="mx-auto max-w-2xl rounded-lg border border-line bg-navy-soft p-6 sm:p-9">
          {!result ? (
            <>
              <div className="mb-6 flex items-center gap-2" aria-hidden="true">
                {[0, 1].map((i) => (
                  <span
                    key={i}
                    className={`h-1 flex-1 rounded-full ${
                      i < trail.length ? "bg-teal" : "bg-line"
                    }`}
                  />
                ))}
              </div>
              <h3 className="mb-5 text-[1.15rem] font-semibold text-cream">
                {current.prompt}
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {current.options.map((o) => (
                  <button
                    key={o.label}
                    onClick={() => choose(o.next)}
                    className="rounded-md border border-line bg-navy px-4 py-3.5 text-left text-[0.9rem] text-ash transition-colors hover:border-teal/40 hover:bg-navy hover:text-cream"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
              {trail.length > 1 && (
                <button
                  onClick={goBack}
                  className="mt-5 text-[0.82rem] text-ash underline-offset-2 hover:text-teal-soft hover:underline"
                >
                  ← Back
                </button>
              )}
            </>
          ) : (
            <>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-teal-soft">
                Recommended for you
              </p>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {recommended.map((s) => (
                  <a
                    key={s.slug}
                    href={`#${s.slug}`}
                    className="group rounded-md border border-line bg-navy p-5 transition-colors hover:border-teal/40 hover:bg-navy"
                  >
                    <h4 className="mb-2 text-[1rem] font-semibold text-cream group-hover:text-teal-soft">
                      {s.title}
                    </h4>
                    <p className="text-[0.85rem] leading-[1.6] text-ash">
                      {s.items[0]}
                    </p>
                  </a>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                
                 <a href="tel:+254798088681"
                  className="inline-flex items-center gap-2 rounded-[3px] bg-btn-primary px-6 py-3 text-[0.85rem] font-semibold tracking-[0.03em] text-[#04120f] transition-transform hover:-translate-y-0.5"
                >
                  Start a Conversation
                </a>
                <button
                  onClick={restart}
                  className="text-[0.82rem] text-ash underline-offset-2 hover:text-teal-soft hover:underline"
                >
                  Start over
                </button>
              </div>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}