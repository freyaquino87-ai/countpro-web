export default function PhoneMockup() {
  return (
    <div
      className="relative mx-auto"
      style={{ width: "280px", height: "560px" }}
      role="img"
      aria-label="CountPro app showing an active session with 3 counters: People In at 47, People Out at 31, and Staff at 8"
    >
      {/* Phone shell */}
      <div
        className="absolute inset-0 rounded-[44px]"
        style={{
          background: "linear-gradient(145deg, #2A2A34 0%, #1A1A22 100%)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.08), 0 24px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      />

      {/* Screen */}
      <div
        className="absolute rounded-[36px] overflow-hidden"
        style={{
          inset: "8px",
          backgroundColor: "#0E0E12",
        }}
      >
        {/* Status bar */}
        <div
          className="flex justify-between items-center px-6 pt-4 pb-2 text-xs font-medium"
          style={{ color: "#9396A1" }}
          aria-hidden="true"
        >
          <span className="tabular-nums">9:41</span>
          <div className="flex gap-1 items-center">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor">
              <rect x="0" y="3" width="3" height="7" rx="1" opacity="0.4" />
              <rect x="4" y="2" width="3" height="8" rx="1" opacity="0.6" />
              <rect x="8" y="0" width="3" height="10" rx="1" />
              <rect x="12" y="1" width="3" height="9" rx="1" />
            </svg>
          </div>
        </div>

        {/* Dynamic island */}
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: "100px", height: "32px", backgroundColor: "#000" }}
          aria-hidden="true"
        />

        {/* Session header */}
        <div className="px-4 pt-8 pb-3" aria-hidden="true">
          <div
            className="text-xs font-medium uppercase tracking-widest mb-1"
            style={{ color: "#5E616C" }}
          >
            Active session
          </div>
          <div
            className="text-base font-semibold"
            style={{ color: "#E4E1E7" }}
          >
            Museum entrance
          </div>
          <div
            className="text-xs mt-0.5 tabular-nums"
            style={{ color: "#5E616C" }}
          >
            Started 14:22 &middot; 3 counters
          </div>
        </div>

        {/* Divider */}
        <div
          className="mx-4"
          style={{ height: "1px", backgroundColor: "#2A2A34" }}
          aria-hidden="true"
        />

        {/* Counter cards */}
        <div className="px-4 pt-3 flex flex-col gap-2" aria-hidden="true">
          {/* Counter 1 */}
          <div
            className="rounded-[16px] p-3 flex items-center justify-between"
            style={{ backgroundColor: "#15151B", border: "1px solid #2A2A34" }}
          >
            <div>
              <div className="text-xs font-medium" style={{ color: "#9396A1" }}>
                People in
              </div>
              <div
                className="text-2xl font-bold tabular-nums leading-tight mt-0.5"
                style={{ color: "#E4E1E7" }}
              >
                47
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-light"
                style={{ backgroundColor: "#1E1E26", color: "#9396A1" }}
              >
                −
              </button>
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold"
                style={{ backgroundColor: "#F2F3F6", color: "#0E0E12" }}
              >
                +
              </button>
            </div>
          </div>

          {/* Counter 2 */}
          <div
            className="rounded-[16px] p-3 flex items-center justify-between"
            style={{ backgroundColor: "#15151B", border: "1px solid #2A2A34" }}
          >
            <div>
              <div className="text-xs font-medium" style={{ color: "#9396A1" }}>
                People out
              </div>
              <div
                className="text-2xl font-bold tabular-nums leading-tight mt-0.5"
                style={{ color: "#E4E1E7" }}
              >
                31
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-light"
                style={{ backgroundColor: "#1E1E26", color: "#9396A1" }}
              >
                −
              </button>
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold"
                style={{ backgroundColor: "#F2F3F6", color: "#0E0E12" }}
              >
                +
              </button>
            </div>
          </div>

          {/* Counter 3 — with threshold */}
          <div
            className="rounded-[16px] p-3 flex items-center justify-between"
            style={{
              backgroundColor: "#15151B",
              border: "1px solid #F59E0B44",
            }}
          >
            <div>
              <div className="text-xs font-medium" style={{ color: "#9396A1" }}>
                Staff
              </div>
              <div
                className="text-2xl font-bold tabular-nums leading-tight mt-0.5"
                style={{ color: "#F59E0B" }}
              >
                8
              </div>
              <div className="text-[10px] mt-0.5" style={{ color: "#F59E0B" }}>
                Threshold: 8
              </div>
            </div>
            <div className="flex gap-2">
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-light"
                style={{ backgroundColor: "#1E1E26", color: "#9396A1" }}
              >
                −
              </button>
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold"
                style={{ backgroundColor: "#F2F3F6", color: "#0E0E12" }}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Archive button */}
        <div className="px-4 mt-4" aria-hidden="true">
          <div
            className="w-full rounded-[12px] py-3 text-center text-sm font-semibold"
            style={{ backgroundColor: "#1E1E26", color: "#9396A1" }}
          >
            Archive session
          </div>
        </div>

        {/* Home indicator */}
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full"
          style={{ width: "100px", height: "4px", backgroundColor: "#E4E1E7", opacity: 0.3 }}
          aria-hidden="true"
        />
      </div>

      {/* Side button */}
      <div
        className="absolute rounded-r-full"
        style={{
          right: "-2px",
          top: "120px",
          width: "4px",
          height: "64px",
          backgroundColor: "#2A2A34",
        }}
        aria-hidden="true"
      />

      {/* Volume buttons */}
      <div
        className="absolute rounded-l-full"
        style={{
          left: "-2px",
          top: "100px",
          width: "4px",
          height: "36px",
          backgroundColor: "#2A2A34",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute rounded-l-full"
        style={{
          left: "-2px",
          top: "148px",
          width: "4px",
          height: "64px",
          backgroundColor: "#2A2A34",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute rounded-l-full"
        style={{
          left: "-2px",
          top: "224px",
          width: "4px",
          height: "64px",
          backgroundColor: "#2A2A34",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
