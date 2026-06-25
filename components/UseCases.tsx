const cases = [
  {
    icon: "📦",
    label: "Inventory",
    description: "Count stock row by row. Archive when the shelf is done.",
    ariaLabel: "Box icon for inventory use case",
  },
  {
    icon: "🚪",
    label: "Door count",
    description: "Track people in and out of a venue or room in real time.",
    ariaLabel: "Door icon for people counting use case",
  },
  {
    icon: "🏋️",
    label: "Fitness",
    description:
      "Reps, sets, laps. Set a goal, get an alert when you hit it.",
    ariaLabel: "Weights icon for fitness use case",
  },
  {
    icon: "🎟️",
    label: "Events",
    description: "Count attendees at the gate. Export the total at the end.",
    ariaLabel: "Ticket icon for events use case",
  },
  {
    icon: "🦜",
    label: "Field surveys",
    description: "Bird sightings, species counts, specimens — anything in the field.",
    ariaLabel: "Parrot icon for field survey use case",
  },
  {
    icon: "🏭",
    label: "Production",
    description: "Units produced per shift. Defects. Cycles. Line speed.",
    ariaLabel: "Factory icon for production use case",
  },
  {
    icon: "🧪",
    label: "Lab work",
    description: "Cell counts, sample batches, test repetitions — precise and logged.",
    ariaLabel: "Lab flask icon for lab use case",
  },
  {
    icon: "🃏",
    label: "Games & scores",
    description: "Points, rounds, laps. Multiple counters for multiple players.",
    ariaLabel: "Cards icon for games use case",
  },
];

export default function UseCases() {
  return (
    <section
      className="py-20 sm:py-28"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p
            className="mb-3 text-sm font-medium uppercase tracking-widest"
            style={{ color: "var(--faint)" }}
          >
            Use cases
          </p>
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--text)" }}
          >
            If it repeats, CountPro handles it.
          </h2>
          <p
            className="mt-4 text-base"
            style={{ color: "var(--muted)", maxWidth: "44ch", margin: "16px auto 0" }}
          >
            Not a fitness app. Not a warehouse app. A universal counter that
            works wherever you need a reliable tally.
          </p>
        </div>

        <ul
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {cases.map((c) => (
            <li
              key={c.label}
              className="rounded-[16px] p-5"
              style={{
                backgroundColor: "var(--bg)",
                border: "1px solid var(--hairline)",
              }}
            >
              <div
                className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-[12px] text-xl"
                style={{ backgroundColor: "var(--raised)" }}
                role="img"
                aria-label={c.ariaLabel}
              >
                {c.icon}
              </div>
              <h3
                className="mb-1 text-sm font-semibold"
                style={{ color: "var(--text)" }}
              >
                {c.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {c.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
