import Link from "next/link";

export default function Footer() {
  const year = 2026;

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
            <svg
              width="20"
              height="20"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <rect x="12" y="15" width="76" height="85" rx="16" ry="16" fill="#F59E0B" stroke="#0E0E12" strokeWidth="4" strokeLinejoin="round"/>
              <circle cx="50" cy="18" r="10" fill="#F59E0B" stroke="#0E0E12" strokeWidth="3"/>
              <circle cx="50" cy="18" r="6" fill="#F59E0B" stroke="#0E0E12" strokeWidth="2"/>
              <rect x="18" y="35" width="48" height="32" rx="4" ry="4" fill="#1A1A1E" stroke="#0E0E12" strokeWidth="3" strokeLinejoin="round"/>
              <text x="42" y="62" fontSize="20" fontWeight="bold" fill="#F59E0B" textAnchor="middle" fontFamily="monospace" letterSpacing="2">237</text>
              <rect x="72" y="42" width="10" height="18" rx="1.5" ry="1.5" fill="#F59E0B" stroke="#0E0E12" strokeWidth="2"/>
              <rect x="73" y="44" width="8" height="14" fill="#0E0E12"/>
              <rect x="73" y="44" width="8" height="10" fill="#F59E0B"/>
            </svg>
            CountPro
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" role="list">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[var(--text)] transition-colors"
                  style={{ color: "var(--muted)", minHeight: "44px", display: "flex", alignItems: "center" }}
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[var(--text)] transition-colors"
                  style={{ color: "var(--muted)", minHeight: "44px", display: "flex", alignItems: "center" }}
                >
                  Terms of use
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@countpro.app"
                  className="hover:text-[var(--text)] transition-colors"
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
