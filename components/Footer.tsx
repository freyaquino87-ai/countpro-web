import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 mt-auto"
      style={{
        backgroundColor: "var(--bg)",
        borderTop: "1px solid var(--hairline)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--text)" }}>
            <span style={{ color: "var(--accent)" }} aria-hidden="true">+</span>
            CountPro
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" role="list">
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors"
                  style={{ color: "var(--muted)", minHeight: "44px", display: "flex", alignItems: "center" }}
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors"
                  style={{ color: "var(--muted)", minHeight: "44px", display: "flex", alignItems: "center" }}
                >
                  Terms of use
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@countpro.app"
                  className="transition-colors"
                  style={{ color: "var(--muted)", minHeight: "44px", display: "flex", alignItems: "center" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <p className="text-xs" style={{ color: "var(--faint)" }}>
            &copy; {year} Reyaquino SAS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
