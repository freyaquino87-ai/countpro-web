"use client";

import { useState } from "react";

const items = [
  {
    q: "Does CountPro collect my data?",
    a: "Your counting data never leaves your device. CountPro has no account system, no backend server, and no cloud sync. Everything lives in local SQLite storage on your phone. When you connect to Pro via in-app purchase, Apple and RevenueCat process the transaction using an anonymous ID — no personal data is shared beyond what an App Store purchase requires. See our Privacy Policy for the full breakdown.",
  },
  {
    q: "What does the free plan include?",
    a: "The free plan gives you a fully functional counter: unlimited active sessions, up to 3 archived sessions, up to 5 counters per session, focus mode, and text sharing. It is not a trial — you can use it free forever.",
  },
  {
    q: "What does Pro add?",
    a: "Pro unlocks unlimited archived sessions, unlimited counters per session, unlimited templates, CSV export, custom step size, threshold alerts, goal progress rings, and app themes including a custom home screen icon.",
  },
  {
    q: "How much does Pro cost?",
    a: "Pro is $2.99 per year or $9.99 as a one-time lifetime purchase. Both options unlock everything at once with no hidden tiers or add-ons.",
  },
  {
    q: "Is CountPro available on Android or iPad?",
    a: "CountPro is an iOS app for iPhone. iPad and Android are not currently planned, but the app works on any modern iPhone running iOS 16 or later.",
  },
  {
    q: "Can I use CountPro offline?",
    a: "Yes, completely. CountPro has no network dependency. It works the same with or without an internet connection.",
  },
  {
    q: "How do I cancel Pro?",
    a: "Cancel anytime from Settings > Apple ID > Subscriptions on your iPhone, or from the App Store app. No in-app hoops, no email to a support team.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="py-20 sm:py-28"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p
            className="mb-3 text-sm font-medium uppercase tracking-widest"
            style={{ color: "var(--faint)" }}
          >
            FAQ
          </p>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--text)" }}
          >
            Common questions
          </h2>
        </div>

        <dl className="flex flex-col gap-2">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-[16px] overflow-hidden"
                style={{
                  backgroundColor: "var(--bg)",
                  border: `1px solid ${isOpen ? "var(--accent)" : "var(--hairline)"}`,
                  transition: "border-color 0.15s",
                }}
              >
                <dt>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    style={{
                      color: "var(--text)",
                      minHeight: "56px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <span className="text-sm font-medium">{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 text-lg leading-none transition-transform duration-200"
                      style={{
                        color: "var(--muted)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>
                </dt>
                {isOpen && (
                  <dd
                    id={`faq-answer-${i}`}
                    className="px-5 pb-5 text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.a}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
