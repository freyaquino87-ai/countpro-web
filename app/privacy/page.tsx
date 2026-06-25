import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — CountPro",
  description: "CountPro privacy policy. Your counting data stays on your device.",
};

const EFFECTIVE_DATE = "June 24, 2026";
const COMPANY = "Reyaquino SAS";
const CONTACT_EMAIL = "privacy@countpro.app";

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>
      {/* Nav */}
      <header
        style={{
          borderBottom: "1px solid var(--hairline)",
          backgroundColor: "var(--surface)",
        }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--text)" }}
          >
            <span style={{ color: "var(--accent)" }} aria-hidden="true">+</span>
            CountPro
          </Link>
          <Link
            href="/"
            className="text-sm transition-colors"
            style={{ color: "var(--muted)", minHeight: "44px", display: "flex", alignItems: "center" }}
          >
            ← Back
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
        <h1
          className="text-3xl font-bold tracking-tight mb-2"
          style={{ color: "var(--text)" }}
        >
          Privacy policy
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--faint)" }}>
          Effective date: {EFFECTIVE_DATE}
        </p>

        <div
          className="flex flex-col gap-10 text-sm leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              1. Who we are
            </h2>
            <p>
              CountPro is published by {COMPANY}, a company registered in
              Colombia. If you have any questions about this policy, contact us
              at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: "var(--accent)" }}
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              2. The short version
            </h2>
            <p>
              CountPro does not collect, transmit, or store any of your
              personal data on external servers. The app has no account system
              and no backend. Everything you count stays on your device, in
              local storage, and never leaves it through the app itself.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              3. Data the app collects and where it lives
            </h2>
            <p className="mb-4">
              CountPro stores all app data locally on your iPhone using
              SQLite. This includes session names, counter names, counts,
              timestamps, archived sessions, and templates. This data is:
            </p>
            <ul className="flex flex-col gap-2 pl-4" style={{ listStyleType: "disc" }}>
              <li>Stored only on your device.</li>
              <li>Never transmitted to {COMPANY} or any third party by the app.</li>
              <li>Not backed up to any {COMPANY} server.</li>
              <li>
                Included in your iCloud device backup if you have iCloud Backup
                enabled in iOS settings — this is managed entirely by Apple, not
                by {COMPANY}.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              4. In-app purchases and RevenueCat
            </h2>
            <p className="mb-4">
              CountPro&apos;s Pro plan is sold as an in-app purchase via the App
              Store. Purchase processing is handled by Apple. To manage
              subscription status and validate purchases across sessions,
              CountPro uses RevenueCat, a third-party service.
            </p>
            <p className="mb-4">
              When you make a purchase or restore one, RevenueCat receives a
              randomly generated, anonymous device identifier along with the
              purchase receipt from Apple. RevenueCat does not receive your
              name, email, Apple ID, or any counting data from the app.
            </p>
            <p>
              RevenueCat&apos;s privacy policy is available at{" "}
              <a
                href="https://www.revenuecat.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
              >
                revenuecat.com/privacy
              </a>
              .
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              5. Analytics and crash reporting
            </h2>
            <p>
              CountPro does not include any analytics SDK or crash reporting
              service. Apple may collect anonymized usage data through iOS
              system diagnostics if you have opted in to share analytics with
              app developers via iOS settings. {COMPANY} does not control
              and has no access to individually identifiable data from this
              system.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              6. This website (countpro.app)
            </h2>
            <p className="mb-4">
              This website is a static marketing site hosted on Vercel. It may
              collect standard web server logs (IP address, browser user agent,
              referrer, page visited) as part of Vercel&apos;s infrastructure.
              These logs are used solely for security and operational purposes
              and are not used for advertising profiling.
            </p>
            <p>
              This website does not currently use cookies, analytics scripts,
              or advertising pixels. If that changes, this section will be
              updated before any such script is added.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              7. Data sharing
            </h2>
            <p>
              {COMPANY} does not sell, rent, or share your personal data with
              third parties for marketing purposes. The only third party that
              receives any data in the course of normal app use is RevenueCat,
              as described in section 4, and only when you make or restore a
              purchase.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              8. Data retention and deletion
            </h2>
            <p>
              Because all app data is stored locally on your device, you can
              delete it at any time by deleting the CountPro app from your
              iPhone. {COMPANY} does not retain any copy of your app data. If
              you contact us via email, we retain your message for as long as
              needed to resolve your inquiry and then delete it.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              9. Children
            </h2>
            <p>
              CountPro is a general-purpose utility app with no age restriction
              on its features. It does not collect personal data from any user,
              including children. No parental consent is required to use the
              app because no personal data is collected.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              10. Your rights
            </h2>
            <p className="mb-4">
              Depending on where you live, you may have rights to access,
              correct, or delete personal data held about you. Because{" "}
              {COMPANY} does not hold personal data about app users, these
              rights primarily apply to data you may have shared through email
              contact with us.
            </p>
            <p>
              To exercise any of your rights, contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: "var(--accent)" }}
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              11. Changes to this policy
            </h2>
            <p>
              If we make material changes to this policy, we will update the
              effective date at the top of this page and, where required by
              law, notify you through the app or by other means. Continued use
              of CountPro after a policy update constitutes acceptance of the
              revised terms.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              12. Contact
            </h2>
            <p>
              {COMPANY}
              <br />
              Email:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{ color: "var(--accent)" }}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
