export type SignalIconName =
  | "hidden"
  | "noise"
  | "late"
  | "student"
  | "professional"
  | "pool"
  | "evidence"
  | "shortlist"
  | "early"
  | "practice"
  | "metric"
  | "expert"
  | "profile";

const drawings = {
  hidden: (
    <>
      <path d="M8 34s13-16 32-16 32 16 32 16-13 16-32 16S8 34 8 34Z" />
      <circle cx="40" cy="34" r="6" />
      <circle className="glyph-accent-fill" cx="84" cy="16" r="3.5" />
    </>
  ),
  noise: (
    <>
      <path className="glyph-faint" d="M8 21l10 8 10-16 10 29 10-22 10 13 10-7 10 5 10-2" />
      <path className="glyph-accent" d="M8 49h76" />
      <circle className="glyph-accent-fill" cx="88" cy="49" r="3.5" />
    </>
  ),
  late: (
    <>
      <circle cx="34" cy="33" r="22" />
      <path d="M34 20v14l10 7" />
      <path className="glyph-accent" d="M61 27c8 2 14 7 17 14M63 18c12 3 21 11 25 23" />
      <circle className="glyph-accent-fill" cx="88" cy="41" r="3.5" />
    </>
  ),
  student: (
    <>
      <circle cx="30" cy="23" r="8" />
      <path d="M16 49c2-11 7-17 14-17s12 6 14 17" />
      <path className="glyph-accent" d="M54 42l10-10 8 5 12-16" />
      <circle className="glyph-accent-fill" cx="84" cy="21" r="3.5" />
    </>
  ),
  professional: (
    <>
      <circle cx="30" cy="23" r="8" />
      <path d="M16 49c2-11 7-17 14-17s12 6 14 17" />
      <circle className="glyph-accent" cx="69" cy="33" r="13" />
      <path className="glyph-accent" d="m63 33 4 4 9-10" />
    </>
  ),
  pool: (
    <>
      <circle cx="22" cy="25" r="7" />
      <circle cx="48" cy="19" r="7" />
      <circle className="glyph-accent" cx="74" cy="25" r="7" />
      <path d="M10 49c2-9 6-14 12-14s10 5 12 14M36 46c2-10 6-16 12-16s10 6 12 16" />
      <path className="glyph-accent" d="M62 49c2-9 6-14 12-14s10 5 12 14" />
    </>
  ),
  evidence: (
    <>
      <path d="M12 50V15M12 50h72" />
      <path d="M20 42l18-13 15 7 21-19" />
      <circle cx="20" cy="42" r="2.5" /><circle cx="38" cy="29" r="2.5" />
      <circle cx="53" cy="36" r="2.5" /><circle className="glyph-accent-fill" cx="74" cy="17" r="3.5" />
    </>
  ),
  shortlist: (
    <>
      <circle cx="17" cy="18" r="3" /><path d="M27 18h48" />
      <circle className="glyph-accent-fill" cx="17" cy="32" r="3.5" /><path className="glyph-accent" d="M27 32h57" />
      <circle cx="17" cy="46" r="3" /><path d="M27 46h40" />
    </>
  ),
  early: (
    <>
      <circle cx="33" cy="33" r="20" />
      <path d="M33 21v13l9 6" />
      <path className="glyph-accent" d="M59 29c8 2 14 7 17 14M61 20c12 3 21 11 25 23" />
      <circle className="glyph-accent-fill" cx="86" cy="43" r="3.5" />
    </>
  ),
  practice: (
    <>
      <rect x="10" y="10" width="76" height="44" rx="2" />
      <path className="glyph-dash" d="M10 21h76M22 10v44M35 10v44M48 10v44M61 10v44M74 10v44" />
      <path d="M16 45l15-12 12 5 13-18 13 9 12-8" />
      <circle className="glyph-accent-fill" cx="56" cy="20" r="3" />
    </>
  ),
  metric: (
    <>
      <path d="M11 50V12M11 50h76" />
      <path className="glyph-dash" d="M11 40h76M11 28h76M28 12v38M48 12v38M68 12v38" />
      <path className="glyph-accent" d="M14 44c15 0 16-17 31-17 11 0 15 9 24 6 8-3 9-14 18-17" />
      <circle className="glyph-accent-fill" cx="69" cy="33" r="2.5" />
    </>
  ),
  expert: (
    <>
      <path d="M7 32s15-17 41-17 41 17 41 17-15 17-41 17S7 32 7 32Z" />
      <circle cx="48" cy="32" r="11" />
      <circle className="glyph-accent" cx="48" cy="32" r="4" />
      <path className="glyph-dash" d="M48 11V5M48 59v-6M93 32h-6M9 32H3" />
      <path className="glyph-accent" d="m43 32 3 3 7-8" />
    </>
  ),
  profile: (
    <>
      <rect x="13" y="9" width="70" height="46" rx="2" />
      <circle cx="30" cy="26" r="8" />
      <path d="M19 47c2-8 6-12 11-12s9 4 11 12M49 19h25M49 27h18M49 35h22" />
      <path className="glyph-accent" d="M49 46h25" />
      <path className="glyph-accent" d="M52 43v6M58 41v8M64 44v5M70 39v10" />
    </>
  ),
};

export function SignalIcon({ name }: { name: SignalIconName }) {
  return (
    <svg
      className="signal-icon signal-icon-clean"
      viewBox="0 0 96 64"
      fill="none"
      aria-hidden="true"
    >
      {drawings[name]}
    </svg>
  );
}
