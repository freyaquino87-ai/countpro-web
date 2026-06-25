const freeFeatures = [
  "Unlimited active sessions",
  "Up to 3 archived sessions",
  "Up to 5 counters per session",
  "Focus mode",
  "Share as text",
];

const proFeatures = [
  "Everything in Free",
  "Unlimited archived sessions",
  "Unlimited counters per session",
  "Unlimited templates",
  "CSV export",
  "Custom step size",
  "Goals with progress ring",
  "Threshold alerts",
  "App themes and custom icon",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p
            className="mb-3 text-sm font-medium uppercase tracking-widest"
            style={{ color: "var(--faint)" }}
          >
            Pricing
          </p>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Free to count. Pro to keep.
          </h2>
          <p
            className="mt-4 text-base"
            style={{ color: "var(--muted)", maxWidth: "42ch", margin: "16px auto 0" }}
          >
            No trial, no paywall on the core. Free gives you a full counter.
            Pro gives you the full record-keeping system.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {/* Free */}
          <div
            className="rounded-[16px] p-7 flex flex-col"
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--hairline)",
            }}
          >
            <div className="mb-6">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--faint)" }}
              >
                Free
              </p>
              <div className="flex items-end gap-1">
                <span
                  className="text-4xl font-bold tabular-nums"
                  style={{ color: "var(--text)" }}
                >
                  $0
                </span>
              </div>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                Forever. No card required.
              </p>
            </div>

            <ul className="flex flex-col gap-2.5 mb-8 flex-1">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--muted)" }}>
                  <span style={{ color: "var(--faint)", flexShrink: 0, marginTop: "1px" }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <div
              className="w-full rounded-[12px] py-3 text-center text-sm font-semibold"
              style={{
                backgroundColor: "var(--raised)",
                border: "1px solid var(--hairline)",
                color: "var(--muted)",
                cursor: "default",
              }}
              role="img"
              aria-label="Free plan — available at App Store launch"
            >
              Included on download
            </div>
          </div>

          {/* Pro */}
          <div
            className="rounded-[16px] p-7 flex flex-col relative overflow-hidden"
            style={{
              backgroundColor: "var(--surface)",
              border: "1px solid var(--accent)",
            }}
          >
            {/* Subtle glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(242,243,246,0.04) 0%, transparent 70%)",
              }}
            />

            <div className="mb-6 relative">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--accent)" }}
              >
                Pro
              </p>
              <div className="flex items-end gap-1">
                <span
                  className="text-4xl font-bold tabular-nums"
                  style={{ color: "var(--text)" }}
                >
                  $2.99
                </span>
                <span className="text-sm mb-1.5" style={{ color: "var(--muted)" }}>
                  / year
                </span>
              </div>
              <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                Or $9.99 one-time lifetime purchase.
              </p>
            </div>

            <ul className="flex flex-col gap-2.5 mb-8 flex-1 relative">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--text)" }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "1px" }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <div
              className="relative w-full rounded-[12px] py-3 text-center text-sm font-semibold"
              style={{
                backgroundColor: "var(--raised)",
                border: "1px solid var(--hairline)",
                color: "var(--muted)",
                cursor: "default",
              }}
              role="img"
              aria-label="Pro plan — available at App Store launch"
            >
              Unlock at launch
            </div>
          </div>
        </div>

        <p
          className="mt-8 text-center text-xs"
          style={{ color: "var(--faint)" }}
        >
          Prices in USD. No dark patterns. No renewal reminders designed to
          confuse. You cancel anytime from your App&nbsp;Store subscriptions.
        </p>
      </div>
    </section>
  );
}
