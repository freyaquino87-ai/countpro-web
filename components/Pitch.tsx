export default function Pitch() {
  return (
    <section
      className="py-20 sm:py-28"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="mb-4 text-sm font-medium uppercase tracking-widest"
            style={{ color: "var(--faint)" }}
          >
            The problem
          </p>
          <h2
            className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Most counters forget your count.{" "}
            <span style={{ color: "var(--accent)" }}>CountPro saves it.</span>
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Other apps give you a number. Reset it, and that number is gone.
            CountPro works in sessions: you open one, count, and when you&apos;re
            done it gets archived with the full breakdown, timestamp, and
            everything you counted. Review it later, share it, or export it.
            The count happened — now it&apos;s on record.
          </p>
        </div>

        {/* Before / After comparison */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {/* Before */}
          <div
            className="rounded-[16px] p-6"
            style={{
              backgroundColor: "var(--bg)",
              border: "1px solid var(--hairline)",
            }}
          >
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--faint)" }}
            >
              Other counter apps
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Tap to count",
                "See a number on screen",
                "Reset and start over",
                "Your count is gone",
                "No record of what happened",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 text-sm"
                    aria-hidden="true"
                    style={{ color: "var(--faint)" }}
                  >
                    ✕
                  </span>
                  <span className="text-sm" style={{ color: "var(--muted)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div
            className="rounded-[16px] p-6"
            style={{
              backgroundColor: "var(--bg)",
              border: "1px solid var(--accent)",
            }}
          >
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              CountPro
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Open a named session",
                "Tap to count — multiple counters",
                "Archive when done",
                "Session saved with full breakdown",
                "Share or export the record",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 text-sm"
                    aria-hidden="true"
                    style={{ color: "var(--accent)" }}
                  >
                    ✓
                  </span>
                  <span className="text-sm" style={{ color: "var(--text)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
