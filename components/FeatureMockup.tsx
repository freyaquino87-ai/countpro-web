type Variant = "sessions" | "templates" | "focus" | "thresholds" | "share";

interface Props {
  variant: Variant;
  alt: string;
}

function ScreenSessions() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Header */}
      <div className="px-4 pt-12 pb-3">
        <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#5E616C" }}>
          History
        </div>
      </div>
      <div className="mx-4 mb-3" style={{ height: "1px", backgroundColor: "#2A2A34" }} />
      {/* Session items */}
      {[
        { name: "Museum entrance", total: "78", time: "Today 14:22", counters: "2 counters" },
        { name: "Warehouse A — row 3", total: "144", time: "Yesterday 09:15", counters: "4 counters" },
        { name: "Conference attendance", total: "237", time: "Mon 18:00", counters: "1 counter" },
        { name: "Morning reps", total: "60", time: "Mon 07:30", counters: "3 counters" },
      ].map((s, i) => (
        <div key={i} className="mx-4 mb-2 rounded-[12px] p-3" style={{ backgroundColor: "#15151B", border: "1px solid #2A2A34" }}>
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs font-medium" style={{ color: "#E4E1E7" }}>{s.name}</div>
              <div className="text-[10px] mt-0.5" style={{ color: "#5E616C" }}>{s.time} &middot; {s.counters}</div>
            </div>
            <div className="text-base font-bold tabular-nums" style={{ color: "#F2F3F6" }}>{s.total}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ScreenTemplates() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="px-4 pt-12 pb-3">
        <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#5E616C" }}>
          Templates
        </div>
      </div>
      <div className="mx-4 mb-3" style={{ height: "1px", backgroundColor: "#2A2A34" }} />
      {[
        { name: "Entrance control", counters: "People in, People out", tags: "2 counters" },
        { name: "Gym sets", counters: "Reps, Sets, Rest cycles", tags: "3 counters" },
        { name: "Inventory row", counters: "Items counted, Damaged", tags: "2 counters" },
      ].map((t, i) => (
        <div key={i} className="mx-4 mb-2 rounded-[12px] p-3" style={{ backgroundColor: "#15151B", border: "1px solid #2A2A34" }}>
          <div className="flex justify-between items-start">
            <div>
              <div className="text-xs font-medium" style={{ color: "#E4E1E7" }}>{t.name}</div>
              <div className="text-[10px] mt-0.5" style={{ color: "#5E616C" }}>{t.counters}</div>
            </div>
            <div
              className="text-[10px] font-medium rounded-full px-2 py-0.5"
              style={{ backgroundColor: "#1E1E26", color: "#9396A1", border: "1px solid #2A2A34" }}
            >
              {t.tags}
            </div>
          </div>
          <div
            className="mt-2 w-full rounded-[8px] py-1.5 text-center text-[10px] font-semibold"
            style={{ backgroundColor: "#F2F3F6", color: "#0E0E12" }}
          >
            Use template →
          </div>
        </div>
      ))}
    </div>
  );
}

function ScreenFocus() {
  return (
    <div className="absolute inset-0 flex flex-col" aria-hidden="true" style={{ backgroundColor: "#0E0E12" }}>
      {/* Top label */}
      <div className="pt-12 pb-4 text-center">
        <div className="text-[10px] font-medium uppercase tracking-widest" style={{ color: "#5E616C" }}>
          Focus mode
        </div>
        <div className="text-xs font-semibold mt-1" style={{ color: "#9396A1" }}>
          People in
        </div>
      </div>
      {/* Big number */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-7xl font-bold tabular-nums" style={{ color: "#F2F3F6" }}>
          47
        </div>
      </div>
      {/* Hint */}
      <div className="pb-16 text-center">
        <div className="text-xs" style={{ color: "#2A2A34" }}>
          Tap anywhere to count
        </div>
      </div>
    </div>
  );
}

function ScreenThresholds() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="px-4 pt-12 pb-3">
        <div className="text-xs font-semibold" style={{ color: "#E4E1E7" }}>Staff counter</div>
        <div className="text-[10px] mt-0.5" style={{ color: "#5E616C" }}>Max threshold: 8</div>
      </div>
      <div className="mx-4 mb-3" style={{ height: "1px", backgroundColor: "#2A2A34" }} />
      {/* Number + ring */}
      <div className="flex flex-col items-center py-4">
        <div className="relative">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" fill="none" stroke="#2A2A34" strokeWidth="8" />
            <circle
              cx="50" cy="50" r="44" fill="none"
              stroke="#F59E0B" strokeWidth="8"
              strokeDasharray={`${(8 / 10) * 276} 276`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-bold tabular-nums" style={{ color: "#F59E0B" }}>8</div>
            <div className="text-[9px]" style={{ color: "#5E616C" }}>of 10</div>
          </div>
        </div>
        {/* Alert badge */}
        <div
          className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold"
          style={{ backgroundColor: "#F59E0B22", border: "1px solid #F59E0B44", color: "#F59E0B" }}
        >
          <span>⚠</span>
          Threshold reached
        </div>
      </div>
      {/* Controls */}
      <div className="mx-4">
        <div className="rounded-[12px] p-3 flex items-center justify-between" style={{ backgroundColor: "#15151B", border: "1px solid #F59E0B44" }}>
          <div className="text-xs font-medium" style={{ color: "#9396A1" }}>Staff</div>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ backgroundColor: "#1E1E26", color: "#9396A1" }}>−</div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold" style={{ backgroundColor: "#F2F3F6", color: "#0E0E12" }}>+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenShare() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="px-4 pt-12 pb-3">
        <div className="text-xs font-semibold" style={{ color: "#E4E1E7" }}>Museum entrance</div>
        <div className="text-[10px] mt-0.5" style={{ color: "#5E616C" }}>Today 14:22 &middot; archived</div>
      </div>
      <div className="mx-4 mb-3" style={{ height: "1px", backgroundColor: "#2A2A34" }} />
      <div className="mx-4 mb-3 rounded-[12px] p-3" style={{ backgroundColor: "#15151B", border: "1px solid #2A2A34" }}>
        <div className="text-xs font-semibold mb-2" style={{ color: "#9396A1" }}>Session summary</div>
        {[
          { name: "People in", val: "47" },
          { name: "People out", val: "31" },
          { name: "Staff", val: "8" },
        ].map((c, i) => (
          <div key={i} className="flex justify-between text-xs mb-1">
            <span style={{ color: "#9396A1" }}>{c.name}</span>
            <span className="tabular-nums font-semibold" style={{ color: "#E4E1E7" }}>{c.val}</span>
          </div>
        ))}
        <div style={{ height: "1px", backgroundColor: "#2A2A34", margin: "8px 0" }} />
        <div className="flex justify-between text-xs font-bold">
          <span style={{ color: "#E4E1E7" }}>Total</span>
          <span className="tabular-nums" style={{ color: "#F2F3F6" }}>86</span>
        </div>
      </div>
      {/* Export buttons */}
      <div className="mx-4 flex flex-col gap-2">
        <div className="rounded-[12px] py-2.5 text-center text-xs font-semibold" style={{ backgroundColor: "#F2F3F6", color: "#0E0E12" }}>
          Share as text
        </div>
        <div className="rounded-[12px] py-2.5 text-center text-xs font-semibold" style={{ backgroundColor: "#1E1E26", border: "1px solid #2A2A34", color: "#9396A1" }}>
          Export CSV (Pro)
        </div>
      </div>
    </div>
  );
}

const screens: Record<Variant, React.FC> = {
  sessions: ScreenSessions,
  templates: ScreenTemplates,
  focus: ScreenFocus,
  thresholds: ScreenThresholds,
  share: ScreenShare,
};

export default function FeatureMockup({ variant, alt }: Props) {
  const Screen = screens[variant];

  return (
    <div
      role="img"
      aria-label={alt}
      className="relative mx-auto"
      style={{ width: "220px", height: "440px" }}
    >
      {/* Phone shell */}
      <div
        className="absolute inset-0 rounded-[40px]"
        style={{
          background: "linear-gradient(145deg, #2A2A34 0%, #1A1A22 100%)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.08), 0 16px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      />
      {/* Screen */}
      <div
        className="absolute rounded-[32px] overflow-hidden"
        style={{
          inset: "8px",
          backgroundColor: "#0E0E12",
        }}
      >
        {/* Dynamic island */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full z-10"
          style={{ width: "80px", height: "24px", backgroundColor: "#000" }}
          aria-hidden="true"
        />
        <Screen />
      </div>
    </div>
  );
}
