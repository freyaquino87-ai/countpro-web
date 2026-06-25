import FeatureMockup from "@/components/FeatureMockup";

const features = [
  {
    id: "sessions",
    tag: "Sessions & history",
    headline: "Every count is a work with a record.",
    body: "Open a session, name it, count. When you're done, archive it. Every archived session keeps the total, per-counter breakdown, and timestamp. Browse history anytime, share results, or export to CSV.",
    mockupVariant: "sessions" as const,
    imageAlt:
      "CountPro history screen showing a list of archived sessions with names, totals, and timestamps",
  },
  {
    id: "templates",
    tag: "Templates",
    headline: "Set it up once, reuse it forever.",
    body: "Save any set of counters as a template — names, step size, thresholds, goals — and start a new session from it in one tap. Nobody else has this.",
    mockupVariant: "templates" as const,
    imageAlt:
      "CountPro templates screen showing saved counter configurations ready to use",
    flip: true,
  },
  {
    id: "focus",
    tag: "Focus mode",
    headline: "Count without looking at the screen.",
    body: "Full-screen mode where a tap anywhere increments the active counter. Threshold alerts fire as haptic feedback and sound — no popup, no interrupt. Count confidently in the dark, eyes-up, or gloved.",
    mockupVariant: "focus" as const,
    imageAlt:
      "CountPro focus mode showing large number display with the entire screen as a tap target",
  },
  {
    id: "thresholds",
    tag: "Thresholds & goals",
    headline: "Know the moment a number matters.",
    body: "Set a minimum or maximum threshold per counter. When you hit it, the app alerts you via haptics and sound without blocking your count. Set a goal and watch progress fill a ring.",
    mockupVariant: "thresholds" as const,
    imageAlt:
      "CountPro counter detail showing threshold alert in amber and goal progress ring",
    flip: true,
  },
  {
    id: "share",
    tag: "Share & export",
    headline: "The count lives beyond the app.",
    body: "Share any archived session as plain text for a quick message, or export to CSV for a spreadsheet. Hand off the record to a team, attach it to a report, or just keep a backup.",
    mockupVariant: "share" as const,
    imageAlt:
      "CountPro share sheet showing export options including text share and CSV export",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <p
            className="mb-3 text-sm font-medium uppercase tracking-widest"
            style={{ color: "var(--faint)" }}
          >
            Features
          </p>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Built for people who count seriously.
          </h2>
        </div>

        <div className="flex flex-col gap-24">
          {features.map((f) => (
            <div
              key={f.id}
              id={f.id}
              className={`flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16 ${
                f.flip ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Mockup */}
              <div className="flex-shrink-0 w-full max-w-[260px] mx-auto lg:mx-0">
                <FeatureMockup
                  variant={f.mockupVariant}
                  alt={f.imageAlt}
                />
              </div>

              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <span
                  className="inline-block mb-3 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "var(--raised)",
                    border: "1px solid var(--hairline)",
                    color: "var(--muted)",
                  }}
                >
                  {f.tag}
                </span>
                <h3
                  className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl"
                  style={{ color: "var(--text)" }}
                >
                  {f.headline}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--muted)", maxWidth: "48ch" }}
                >
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
