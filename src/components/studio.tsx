import { useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  BANDS,
  CONTAINER_SITE,
  PALETTE,
  SHELL_INCLUDES,
  SKINS,
  type BandId,
  type Home,
  findHome,
  homesIn,
} from "@/lib/catalog";
import { FloorPlan } from "@/components/floor-plan";
import { cn, usd } from "@/lib/utils";

type View =
  | "home"
  | "beach"
  | "canal"
  | "gate"
  | "value"
  | "lots"
  | "living"
  | "map";

const NAV: { id: View; label: string }[] = [
  { id: "beach", label: "Beach" },
  { id: "canal", label: "Canal" },
  { id: "gate", label: "Gate" },
  { id: "value", label: "Canal value" },
  { id: "lots", label: "Lots" },
  { id: "living", label: "Inside" },
  { id: "map", label: "Site map" },
];

export function Studio() {
  const [view, setView] = useState<View>("home");
  const [lot, setLot] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const selected = lot ? findHome(lot) : undefined;

  function go(next: View, nextLot?: number) {
    setView(next);
    setLot(nextLot ?? null);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <button
            type="button"
            onClick={() => go("home")}
            className="text-left"
          >
            <p className="font-display text-lg leading-none tracking-tight">
              Moonlight Bay Wood Homes
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted">
              Consejo · Belize
            </p>
          </button>
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition-colors",
                  view === item.id
                    ? "bg-lagoon text-foam"
                    : "text-muted hover:bg-sand/60 hover:text-ink",
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open ? (
          <div className="grid gap-1 border-t border-line px-4 py-3 lg:hidden">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="rounded-xl px-3 py-3 text-left text-base"
              >
                {item.label}
              </button>
            ))}
          </div>
        ) : null}
      </header>

      <main>
        {view === "home" ? <HomeView go={go} /> : null}
        {view === "beach" ? (
          <BandPage
            title="Beach"
            lede="Open bay, not the canal. Four Plett 20×40 wood homes on lots 196–199."
            hero="/homes/beach-hero.jpg"
            aerial="/homes/aerial-beach.jpg"
            homes={[...homesIn("beach")]}
            extra={<CatalogNote size="20×40" />}
            onPick={(n) => setLot(n)}
            selected={selected}
          />
        ) : null}
        {view === "canal" ? (
          <BandPage
            title="Canal"
            lede="Plett 20×30 wood homes on dry land. Decks sit at a 5 ft drop to the waterway."
            hero="/homes/canal-hero.jpg"
            aerial="/homes/aerial-canal.jpg"
            homes={[...homesIn("canal")]}
            extra={<CatalogNote size="20×30" />}
            onPick={(n) => setLot(n)}
            selected={selected}
          />
        ) : null}
        {view === "gate" ? (
          <BandPage
            title="Gated entrance"
            lede="Lots 330, 315, 314, 169, 168, 167 and 165. The gate sits beside the first house. One road past every home. Unfurnished $180k–$250k."
            hero="/homes/aerial-gate.jpg"
            aerial="/homes/aerial-gate.jpg"
            homes={[...homesIn("gate")]}
            onPick={(n) => setLot(n)}
            selected={selected}
          />
        ) : null}
        {view === "value" ? (
          <BandPage
            title="Canal value"
            lede="Lots 103–114 on the inland canal, furthest from the ocean. Mixed wood models, 400 sq ft decks, kayak steps. Unfurnished $180k–$250k."
            hero="/homes/aerial-canal.jpg"
            aerial="/homes/aerial-canal.jpg"
            homes={[...homesIn("canal"), ...homesIn("canal-value")]}
            onPick={(n) => setLot(n)}
            selected={selected}
          />
        ) : null}
        {view === "lots" ? <LotsView go={go} onPick={(n) => { setView("lots"); setLot(n); }} selected={selected} /> : null}
        {view === "living" ? <LivingView /> : null}
        {view === "map" ? <MapView /> : null}
      </main>

      <footer className="border-t border-line px-4 py-10 text-sm text-muted">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-base text-ink">Moonlight Bay Wood Homes</p>
            <p className="mt-1">de Consejo · Corozal District, Belize</p>
            <p className="mt-1">Plett catalog wood shells. Unfurnished. Concept only.</p>
          </div>
          <a
            href={CONTAINER_SITE}
            className="inline-flex items-center gap-2 text-lagoon"
            target="_blank"
            rel="noreferrer"
          >
            Furnished container villas at moonlightbaycontainerhomes
            <ArrowUpRight size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
}

function HomeView({ go }: { go: (v: View) => void }) {
  return (
    <>
      <section className="relative min-h-[78vh] overflow-hidden">
        <img
          src="/homes/beach-hero.jpg"
          alt="Salt-white wood bungalow on the beach at Consejo"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-28">
          <p className="text-xs uppercase tracking-[0.22em] text-foam/80">
            Plett wood catalog · Unfurnished shells
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.05] text-foam sm:text-6xl">
            Wood homes from $180k to $250k, on every kind of lot.
          </h1>
          <p className="mt-4 max-w-xl text-base text-foam/85">
            Stick-built bungalows from the Plett floor-plan catalog. You furnish.
            Skins and decks change. The shell is wood.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { id: "beach" as const, img: "/homes/beach-hero.jpg", t: "Beach", d: "Bay-front 20×40 Plett homes on 196–199." },
          { id: "canal" as const, img: "/homes/canal-hero.jpg", t: "Canal", d: "Waterway lots with kayak steps down a 5 ft bank." },
          { id: "gate" as const, img: "/homes/aerial-gate.jpg", t: "Gate", d: "Moderate cottages just inside the entrance." },
          { id: "value" as const, img: "/homes/aerial-canal.jpg", t: "Canal value", d: "Lots 103–114, furthest from the ocean." },
        ].map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => go(c.id)}
            className="group overflow-hidden rounded-xl border border-line bg-foam text-left"
          >
            <img src={c.img} alt="" className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            <div className="p-4">
              <p className="font-display text-xl">{c.t}</p>
              <p className="mt-1 text-sm text-muted">{c.d}</p>
            </div>
          </button>
        ))}
      </section>
    </>
  );
}

function CatalogNote({ size }: { size: string }) {
  return (
    <aside className="rounded-xl border border-line bg-foam p-5">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">
        Plett Home Builders
      </p>
      <h3 className="mt-1 font-display text-2xl">{size} wood plans</h3>
      <p className="mt-2 text-sm text-muted">
        Single-story stick-built modules from the 2026 floor-plan catalog.
        Hip or gable roofs, clapboard or board-and-batten, teak verandas.
        Unfurnished — furniture is not in the price.
      </p>
    </aside>
  );
}

function BandPage({
  title,
  lede,
  hero,
  aerial,
  homes,
  extra,
  onPick,
  selected,
}: {
  title: string;
  lede: string;
  hero: string;
  aerial: string;
  homes: Home[];
  extra?: ReactNode;
  onPick: (lot: number) => void;
  selected?: Home;
}) {
  const current = selected && homes.some((h) => h.lot === selected.lot) ? selected : homes[0];
  return (
    <div>
      <div className="relative h-[48vh] min-h-72 overflow-hidden">
        <img src={hero} alt="" className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-6xl px-4 pb-8">
          <h1 className="font-display text-4xl text-foam sm:text-5xl">{title}</h1>
          <p className="mt-2 max-w-2xl text-foam/85">{lede}</p>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[1fr_320px]">
        <div>
          {current ? <HouseCard home={current} /> : null}
          <div className="mt-6 flex flex-wrap gap-2">
            {homes.map((h) => (
              <button
                key={h.lot}
                type="button"
                onClick={() => onPick(h.lot)}
                className={cn(
                  "min-h-11 rounded-full border px-4 text-sm",
                  current?.lot === h.lot
                    ? "border-lagoon bg-lagoon text-foam"
                    : "border-line bg-foam",
                )}
              >
                #{h.lot}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {extra}
          <img src={aerial} alt="" className="w-full rounded-xl object-cover" />
        </div>
      </div>
    </div>
  );
}

function HouseCard({ home }: { home: Home }) {
  const skin = SKINS[home.skin];
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-foam">
      <img src={skin.image} alt={skin.label} className="h-72 w-full object-cover sm:h-96" />
      <div className="grid gap-6 p-5 sm:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            Lot #{home.lot} · Plett {home.plan.id}
          </p>
          <h2 className="mt-1 font-display text-3xl">{home.title}</h2>
          <p className="mt-2 text-sm text-muted">{skin.finish}</p>
          <p className="mt-2 text-sm">{home.note}</p>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-muted">Plan</dt>
              <dd>{home.plan.size} · {home.plan.sqft.toLocaleString()} sf</dd>
            </div>
            <div>
              <dt className="text-muted">Beds / baths</dt>
              <dd>
                {home.plan.beds === 0 ? "Studio" : home.plan.beds} / {home.plan.baths}
              </dd>
            </div>
            <div>
              <dt className="text-muted">Unfurnished</dt>
              <dd className="font-medium tabular-nums">{usd(home.price)}</dd>
            </div>
            <div>
              <dt className="text-muted">Lot</dt>
              <dd>¼ acre</dd>
            </div>
          </dl>
        </div>
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted">Floor plan</p>
          <FloorPlan plan={home.plan} />
        </div>
      </div>
    </article>
  );
}

function LotsView({
  go,
  onPick,
  selected,
}: {
  go: (v: View) => void;
  onPick: (n: number) => void;
  selected?: Home;
}) {
  const [band, setBand] = useState<BandId>("beach");
  const list = homesIn(band);
  const current = selected && selected.band === band ? selected : list[0];
  const meta = BANDS.find((b) => b.id === band)!;
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">Plett 2026 catalog</p>
      <h1 className="mt-2 font-display text-4xl">Mix the styles. Keep the wood shell.</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Big plans on the beach, middle on the canal, medium on the park street,
        small on the inner street. Each lot is a different clapboard skin so the
        row never clones. Furniture is not included.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {BANDS.filter((b) => ["beach", "canal", "park", "street"].includes(b.id)).map((b) => (
          <button
            key={b.id}
            type="button"
            onClick={() => {
              setBand(b.id);
              onPick(homesIn(b.id)[0].lot);
            }}
            className={cn(
              "min-h-11 rounded-full border px-4 text-sm",
              band === b.id ? "border-lagoon bg-lagoon text-foam" : "border-line bg-foam",
            )}
          >
            {b.label}
          </button>
        ))}
      </div>
      <img src={meta.aerial} alt="" className="mt-6 h-64 w-full rounded-xl object-cover sm:h-80" />
      <p className="mt-3 text-sm text-muted">{meta.blurb} {meta.price}.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {list.map((h) => (
          <button
            key={h.lot}
            type="button"
            onClick={() => onPick(h.lot)}
            className={cn(
              "min-h-11 rounded-full border px-4 text-sm",
              current?.lot === h.lot ? "border-lagoon bg-lagoon text-foam" : "border-line bg-foam",
            )}
          >
            #{h.lot}
          </button>
        ))}
      </div>
      {current ? <div className="mt-6"><HouseCard home={current} /></div> : null}
      <button type="button" onClick={() => go("map")} className="mt-6 inline-flex items-center gap-2 text-sm text-lagoon">
        Open the July 2026 site map <ArrowUpRight size={14} />
      </button>
    </div>
  );
}

function LivingView() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">Unfurnished shell</p>
      <h1 className="mt-2 font-display text-4xl">You furnish. We deliver the wood house.</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Unlike the container villas, these Plett homes arrive empty. Limewash
        walls, teak floors, kitchen millwork, and a bath rough-in. No sofa, no
        bed, no factory furniture kit.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <img src="/homes/interior-living.jpg" alt="Unfurnished living and kitchen" className="h-72 w-full rounded-xl object-cover" />
        <img src="/homes/interior-bedroom.jpg" alt="Unfurnished bedroom" className="h-72 w-full rounded-xl object-cover" />
      </div>
      <div className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {PALETTE.map((c) => (
          <div key={c.name} className="overflow-hidden rounded-xl border border-line bg-foam">
            <div className="h-16" style={{ background: c.hex }} />
            <div className="p-2 text-xs">
              <p className="font-medium">{c.name}</p>
              <p className="text-muted">{c.use}</p>
            </div>
          </div>
        ))}
      </div>
      <ul className="mt-8 grid gap-2 sm:grid-cols-2">
        {SHELL_INCLUDES.map((item) => (
          <li key={item} className="rounded-xl border border-line bg-foam px-4 py-3 text-sm">
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">
        Unfurnished shells from $180,000 to $250,000. Want the fully furnished
        container line instead?{" "}
        <a href={CONTAINER_SITE} className="text-lagoon" target="_blank" rel="noreferrer">
          moonlightbaycontainerhomes
        </a>
      </p>
    </div>
  );
}

function MapView() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="text-xs uppercase tracking-[0.18em] text-muted">July 2026 snapshot</p>
      <h1 className="mt-2 font-display text-4xl">Site map</h1>
      <p className="mt-3 max-w-2xl text-muted">
        This plat is from July 2026 and is not live inventory. Other lots may
        already be sold. Check with the developer for the current map and what
        is available.
      </p>
      <div className="mt-6 overflow-hidden rounded-xl border border-line bg-ink">
        <img src="/site-map.jpg" alt="Moonlight Bay de Consejo lot map, July 2026" className="w-full" />
      </div>
      <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
        <div className="rounded-xl border border-line bg-foam p-4">
          <p className="font-medium">How to read it</p>
          <p className="mt-1 text-muted">
            Green available · blue pending · purple under contract · red sold.
            Treat every lot as open or pending until the developer confirms.
          </p>
        </div>
        <div className="rounded-xl border border-line bg-foam p-4">
          <p className="font-medium">Our rows</p>
          <p className="mt-1 text-muted">
            Beach 196–199 · canal 103–114 · park 234–239 · street 241, 252–259 ·
            gate 330, 315, 314, 169–165.
          </p>
        </div>
      </div>
    </div>
  );
}
