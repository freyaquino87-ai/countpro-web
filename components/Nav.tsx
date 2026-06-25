"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50"
      style={{
        backgroundColor: scrolled ? "rgba(14,14,18,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--hairline)" : "none",
        transition: "background-color 0.2s, backdrop-filter 0.2s, border-color 0.2s",
      }}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors"
          aria-label="CountPro home"
        >
          <span
            className="tabular-nums text-[var(--accent)] text-lg font-bold tracking-tight"
            aria-hidden="true"
          >
            +
          </span>
          <span>CountPro</span>
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="#features"
            className="hidden sm:block text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            style={{ minHeight: "44px", display: "flex", alignItems: "center" }}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hidden sm:block text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            style={{ minHeight: "44px", display: "flex", alignItems: "center" }}
          >
            Pricing
          </a>
          <a
            href="#get-app"
            className="inline-flex items-center gap-2 rounded-[12px] bg-[var(--accent)] px-4 text-sm font-medium text-[var(--accent-on)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            style={{ height: "40px", minHeight: "44px" }}
          >
            Get&nbsp;the&nbsp;app
          </a>
        </div>
      </nav>
    </header>
  );
}
