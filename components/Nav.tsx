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
          <svg
            width="24"
            height="24"
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
