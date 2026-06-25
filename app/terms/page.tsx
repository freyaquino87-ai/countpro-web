import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — CountPro",
  description: "CountPro terms of use and license agreement.",
};

const EFFECTIVE_DATE = "June 24, 2026";
const COMPANY = "Reyaquino SAS";
const CONTACT_EMAIL = "support@countpro.app";

export default function TermsPage() {
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
          Terms of use
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
              1. Acceptance
            </h2>
            <p>
              By downloading, installing, or using CountPro (the &quot;App&quot;),
              you agree to these Terms of Use. If you do not agree, do not use
              the App. These Terms apply in addition to Apple&apos;s Standard End
              User License Agreement (EULA), which is incorporated herein by
              reference.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              2. License
            </h2>
            <p className="mb-4">
              {COMPANY} grants you a limited, non-exclusive, non-transferable,
              revocable license to download and use CountPro on Apple devices
              that you own or control, solely for personal or internal business
              purposes and in accordance with these Terms and the App Store
              terms.
            </p>
            <p>You may not:</p>
            <ul className="flex flex-col gap-2 pl-4 mt-3" style={{ listStyleType: "disc" }}>
              <li>Copy, modify, or create derivative works based on the App.</li>
              <li>
                Reverse-engineer, decompile, or disassemble any part of the
                App, except as permitted by applicable law.
              </li>
              <li>
                Remove or obscure any copyright, trademark, or other proprietary
                notice from the App.
              </li>
              <li>Use the App for any unlawful purpose.</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              3. Pro subscription and in-app purchases
            </h2>
            <p className="mb-4">
              CountPro offers optional in-app purchases, including a Pro
              annual subscription and a Pro lifetime purchase, which unlock
              additional features as described in the App and on this website.
            </p>
            <p className="mb-4">
              All purchases are processed by Apple through the App Store.
              Subscriptions automatically renew at the end of each billing
              period unless cancelled at least 24 hours before the renewal
              date. You can manage and cancel subscriptions from your Apple ID
              settings.
            </p>
            <p>
              Prices are listed in USD and may vary by region due to local
              taxes and App Store pricing. {COMPANY} reserves the right to
              change pricing at any time; changes will not apply to your
              current subscription period.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              4. Intellectual property
            </h2>
            <p>
              CountPro, including its name, logo, design, source code,
              features, and content, is the property of {COMPANY} and is
              protected by intellectual property laws. Nothing in these Terms
              transfers any intellectual property rights to you. Your license
              is limited to using the App as described here.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              5. Disclaimer of warranties
            </h2>
            <p>
              CountPro is provided &quot;as is&quot; and &quot;as available&quot; without any
              warranties of any kind, express or implied, including but not
              limited to warranties of merchantability, fitness for a
              particular purpose, or non-infringement. {COMPANY} does not
              warrant that the App will be error-free, uninterrupted, or free
              of bugs. You use the App at your own risk.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              6. Limitation of liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, {COMPANY}
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to
              your use of or inability to use the App, even if {COMPANY} has
              been advised of the possibility of such damages. {COMPANY}&apos;s
              total liability for any claim relating to the App shall not
              exceed the amount you paid for the App in the 12 months
              preceding the claim, or $10, whichever is greater.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              7. Data and backup
            </h2>
            <p>
              All data created in CountPro is stored locally on your device.
              You are solely responsible for backing up your device and your
              data. {COMPANY} is not liable for any loss of data resulting from
              device failure, deletion, or any other cause.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              8. Termination
            </h2>
            <p>
              {COMPANY} may terminate or suspend your license at any time
              without notice if you violate these Terms. Upon termination, your
              right to use the App ceases immediately. Because all data is
              local, no data is affected on our end; your device data remains
              yours to delete.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              9. Governing law and disputes
            </h2>
            <p>
              These Terms are governed by the laws of Colombia, without regard
              to conflict of law principles. Any dispute arising from these
              Terms or your use of CountPro shall be subject to the exclusive
              jurisdiction of the courts of Bogot&aacute;, Colombia, except where
              mandatory consumer protection laws in your jurisdiction require
              otherwise.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              10. Changes to these terms
            </h2>
            <p>
              {COMPANY} may update these Terms at any time. We will update
              the effective date at the top of this page when we do. Continued
              use of the App after the updated terms are published constitutes
              your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2
              className="text-base font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              11. Contact
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
