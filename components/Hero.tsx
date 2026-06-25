import PhoneMockup from "@/components/PhoneMockup";

export default function Hero() {
  return (
    <section
      id="get-app"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(242,243,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Copy */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
              style={{
                border: "1px solid var(--hairline)",
                backgroundColor: "var(--surface)",
                color: "var(--muted)",
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--alert-min)" }}
                aria-hidden="true"
              />
              Coming soon to App&nbsp;Store
            </div>

            <h1
              className="mb-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: "var(--text)" }}
            >
              Count anything.{" "}
              <span style={{ color: "var(--accent)" }}>
                Remember&nbsp;everything.
              </span>
            </h1>

            <p
              className="mb-8 text-lg leading-relaxed sm:text-xl"
              style={{ color: "var(--muted)", maxWidth: "42ch" }}
            >
              CountPro is the manual counter for iOS that archives every
              session. Tap to count, done when you stop, history always there.
            </p>

            <div className="flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              {/* Coming soon CTA — replace with App Store badge at launch */}
              <div
                className="flex items-center gap-3 rounded-[12px] px-6 py-3.5 text-sm font-semibold"
                style={{
                  backgroundColor: "var(--raised)",
                  border: "1px solid var(--hairline)",
                  color: "var(--muted)",
                  cursor: "default",
                  minHeight: "52px",
                }}
                role="img"
                aria-label="App Store download coming soon"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span>Download on the App&nbsp;Store — coming&nbsp;soon</span>
              </div>

              <a
                href="#features"
                className="text-sm transition-colors"
                style={{ color: "var(--muted)", minHeight: "44px", display: "flex", alignItems: "center" }}
              >
                See how it works →
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex-shrink-0 w-full max-w-[280px] lg:max-w-[320px]">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
