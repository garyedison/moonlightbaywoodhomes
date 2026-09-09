export type BandId = "beach" | "canal" | "park" | "street" | "gate" | "canal-value";
export type SkinId =
  | "white-bungalow"
  | "mint-cottage"
  | "teak-lodge"
  | "elevated"
  | "white-porch"
  | "board-batten"
  | "linear-bungalow"
  | "wrap-cottage"
  | "studio-cottage"
  | "tiny-loft"
  | "yellow-cottage"
  | "grey-gable";

export type Room = {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  kind: "room" | "wet" | "deck" | "kitchen";
};

export type Plan = {
  id: string;
  name: string;
  size: string;
  sqft: number;
  beds: number;
  baths: number;
  width: number;
  depth: number;
  rooms: Room[];
};

export type Home = {
  lot: number;
  band: BandId;
  plan: Plan;
  skin: SkinId;
  title: string;
  price: number;
  note: string;
};

export const SKINS: Record<
  SkinId,
  { label: string; finish: string; image: string }
> = {
  "white-bungalow": {
    label: "Salt bungalow",
    finish: "Salt-white clapboard, charcoal hip roof",
    image: "/homes/white-bungalow.jpg",
  },
  "mint-cottage": {
    label: "Sea-glass cottage",
    finish: "Pale aqua siding, white rail, plunge pool",
    image: "/homes/mint-cottage.jpg",
  },
  "teak-lodge": {
    label: "Teak lodge",
    finish: "Oiled teak boards, charcoal gable",
    image: "/homes/teak-lodge.jpg",
  },
  elevated: {
    label: "Screened porch",
    finish: "White siding, charcoal X-rail, raised on timber",
    image: "/homes/elevated.jpg",
  },
  "white-porch": {
    label: "Porch cottage",
    finish: "White gable, full-width teak porch",
    image: "/homes/white-porch.jpg",
  },
  "board-batten": {
    label: "Loft cottage",
    finish: "Board-and-batten, sleeping loft, timber porch",
    image: "/homes/board-batten.jpg",
  },
  "linear-bungalow": {
    label: "Glass bungalow",
    finish: "Linear clapboard, hip roof, glass living wall",
    image: "/homes/linear-bungalow.jpg",
  },
  "wrap-cottage": {
    label: "L-wrap cottage",
    finish: "Two gabled wings joined as an L, wrap teak porch",
    image: "/homes/wrap-cottage.jpg",
  },
  "studio-cottage": {
    label: "Studio cottage",
    finish: "Compact clapboard, charcoal hip, teal door",
    image: "/homes/studio-cottage.jpg",
  },
  "tiny-loft": {
    label: "Loft cabin",
    finish: "Cedar tiny house with sleeping loft",
    image: "/homes/tiny-loft.jpg",
  },
  "yellow-cottage": {
    label: "Sun cottage",
    finish: "Pale-yellow clapboard, teal door, hip roof",
    image: "/homes/yellow-cottage.jpg",
  },
  "grey-gable": {
    label: "Grey gable",
    finish: "Grey clapboard, charcoal gable, front porch",
    image: "/homes/grey-gable.jpg",
  },
};

function plan(
  id: string,
  name: string,
  w: number,
  d: number,
  beds: number,
  baths: number,
  rooms: Room[],
): Plan {
  return {
    id,
    name,
    size: `${w}×${d}`,
    sqft: w * d,
    beds,
    baths,
    width: w,
    depth: d,
    rooms,
  };
}

const P202639 = plan("202639", "20×40 · 2 bed, 2.5 bath", 40, 20, 2, 2.5, [
  { id: "m", label: "Master", x: 0, y: 6, w: 14, h: 14, kind: "room" },
  { id: "b2", label: "Bedroom", x: 0, y: 0, w: 11, h: 6, kind: "room" },
  { id: "ba", label: "Bath", x: 14, y: 12, w: 8, h: 8, kind: "wet" },
  { id: "h", label: "½ bath", x: 14, y: 6, w: 6, h: 6, kind: "wet" },
  { id: "ld", label: "Laundry", x: 20, y: 6, w: 5, h: 6, kind: "wet" },
  { id: "k", label: "Kitchen", x: 22, y: 0, w: 10, h: 8, kind: "kitchen" },
  { id: "lr", label: "Living", x: 25, y: 8, w: 15, h: 12, kind: "room" },
  { id: "dn", label: "Dining", x: 32, y: 0, w: 8, h: 8, kind: "room" },
  { id: "v", label: "Veranda", x: 40, y: 4, w: 8, h: 16, kind: "deck" },
]);

const P21003 = plan("21003", "20×40 · 3 bed, 2 bath", 40, 20, 3, 2, [
  { id: "k", label: "Kitchen", x: 0, y: 0, w: 10, h: 8, kind: "kitchen" },
  { id: "b3", label: "Bedroom", x: 10, y: 0, w: 12, h: 8, kind: "room" },
  { id: "ba", label: "Bath", x: 22, y: 0, w: 8, h: 8, kind: "wet" },
  { id: "b2", label: "Bedroom", x: 30, y: 0, w: 10, h: 8, kind: "room" },
  { id: "m", label: "Master", x: 26, y: 8, w: 14, h: 12, kind: "room" },
  { id: "ba2", label: "Bath", x: 18, y: 8, w: 8, h: 8, kind: "wet" },
  { id: "lr", label: "Living + dining", x: 0, y: 8, w: 18, h: 12, kind: "room" },
  { id: "v", label: "Deck", x: 0, y: 20, w: 20, h: 6, kind: "deck" },
]);

const P202638 = plan("202638", "20×40 · 2 bed, 2 bath", 40, 20, 2, 2, [
  { id: "b1", label: "Bedroom", x: 0, y: 8, w: 12, h: 12, kind: "room" },
  { id: "ba", label: "Bath", x: 0, y: 0, w: 8, h: 8, kind: "wet" },
  { id: "k", label: "Kitchen", x: 12, y: 0, w: 12, h: 8, kind: "kitchen" },
  { id: "lr", label: "Living", x: 12, y: 8, w: 16, h: 12, kind: "room" },
  { id: "b2", label: "Bedroom", x: 28, y: 8, w: 12, h: 12, kind: "room" },
  { id: "ba2", label: "Bath", x: 28, y: 0, w: 12, h: 8, kind: "wet" },
  { id: "v", label: "8×34 veranda", x: 6, y: 20, w: 34, h: 8, kind: "deck" },
]);

const P202631 = plan("202631", "20×40 · 3 bed, 2 bath", 40, 20, 3, 2, [
  { id: "b1", label: "Bedroom", x: 0, y: 0, w: 10, h: 10, kind: "room" },
  { id: "b2", label: "Bedroom", x: 0, y: 10, w: 10, h: 10, kind: "room" },
  { id: "ba", label: "Bath", x: 10, y: 0, w: 6, h: 10, kind: "wet" },
  { id: "k", label: "Kitchen", x: 16, y: 0, w: 10, h: 8, kind: "kitchen" },
  { id: "lr", label: "Living", x: 16, y: 8, w: 12, h: 12, kind: "room" },
  { id: "m", label: "Master", x: 28, y: 0, w: 12, h: 12, kind: "room" },
  { id: "ba2", label: "Bath", x: 28, y: 12, w: 12, h: 8, kind: "wet" },
]);

const P202611 = plan("202611", "20×30 · 2 bed, 1 bath", 30, 20, 2, 1, [
  { id: "b1", label: "Bedroom", x: 0, y: 0, w: 14, h: 10, kind: "room" },
  { id: "b2", label: "Bedroom", x: 0, y: 10, w: 10, h: 10, kind: "room" },
  { id: "c", label: "Closet", x: 14, y: 0, w: 6, h: 6, kind: "room" },
  { id: "ba", label: "Bath", x: 10, y: 10, w: 7, h: 10, kind: "wet" },
  { id: "k", label: "Kitchen", x: 20, y: 0, w: 10, h: 8, kind: "kitchen" },
  { id: "lr", label: "Living", x: 17, y: 8, w: 13, h: 12, kind: "room" },
  { id: "v", label: "8×20 deck", x: 30, y: 0, w: 8, h: 20, kind: "deck" },
]);

const P21009 = plan("21009", "20×30 · 3 bed, 1 bath", 30, 20, 3, 1, [
  { id: "b1", label: "Bedroom", x: 0, y: 0, w: 10, h: 10, kind: "room" },
  { id: "b2", label: "Bedroom", x: 0, y: 10, w: 12, h: 10, kind: "room" },
  { id: "ba", label: "Bath", x: 10, y: 0, w: 7, h: 10, kind: "wet" },
  { id: "k", label: "Kitchen", x: 17, y: 0, w: 13, h: 8, kind: "kitchen" },
  { id: "b3", label: "Bedroom", x: 12, y: 10, w: 8, h: 10, kind: "room" },
  { id: "lr", label: "Living", x: 20, y: 8, w: 10, h: 12, kind: "room" },
  { id: "v", label: "6×20 veranda", x: 30, y: 4, w: 6, h: 16, kind: "deck" },
]);

const P21013 = plan("21013", "20×30 · 2 bed, 1 bath", 30, 20, 2, 1, [
  { id: "b1", label: "Bedroom", x: 0, y: 0, w: 10, h: 10, kind: "room" },
  { id: "b2", label: "Bedroom", x: 0, y: 10, w: 12, h: 10, kind: "room" },
  { id: "ba", label: "Bath", x: 10, y: 0, w: 6, h: 10, kind: "wet" },
  { id: "k", label: "Kitchen", x: 16, y: 0, w: 14, h: 8, kind: "kitchen" },
  { id: "lr", label: "Living", x: 12, y: 8, w: 18, h: 12, kind: "room" },
  { id: "v", label: "6×18 veranda", x: 30, y: 2, w: 6, h: 18, kind: "deck" },
]);

const P202625 = plan("202625", "20×30 · 2 bed, 2 bath", 30, 20, 2, 2, [
  { id: "ba", label: "Bath", x: 0, y: 0, w: 6, h: 8, kind: "wet" },
  { id: "b1", label: "Bedroom", x: 0, y: 8, w: 9, h: 12, kind: "room" },
  { id: "k", label: "Kitchen", x: 6, y: 0, w: 12, h: 8, kind: "kitchen" },
  { id: "lr", label: "Living", x: 9, y: 8, w: 11, h: 12, kind: "room" },
  { id: "ba2", label: "Bath", x: 18, y: 0, w: 6, h: 8, kind: "wet" },
  { id: "b2", label: "Bedroom", x: 20, y: 8, w: 10, h: 12, kind: "room" },
  { id: "v", label: "Deck", x: 10, y: 20, w: 11, h: 4, kind: "deck" },
]);

const P202633 = plan("202633", "20×30 · 2 bed, 1 bath", 30, 20, 2, 1, [
  { id: "b1", label: "Bedroom", x: 0, y: 8, w: 12, h: 12, kind: "room" },
  { id: "k", label: "Kitchen", x: 8, y: 0, w: 10, h: 8, kind: "kitchen" },
  { id: "lr", label: "Living", x: 12, y: 8, w: 8, h: 12, kind: "room" },
  { id: "ba", label: "Bath", x: 18, y: 0, w: 6, h: 10, kind: "wet" },
  { id: "b2", label: "Bedroom", x: 20, y: 8, w: 10, h: 12, kind: "room" },
  { id: "v", label: "6×30 veranda", x: 0, y: 20, w: 30, h: 6, kind: "deck" },
]);

const P202621 = plan("202621", "20×34 · 2 bed, 1 bath", 34, 20, 2, 1, [
  { id: "b1", label: "Bedroom", x: 0, y: 0, w: 11, h: 10, kind: "room" },
  { id: "b2", label: "Bedroom", x: 0, y: 10, w: 12, h: 10, kind: "room" },
  { id: "ba", label: "Bath", x: 12, y: 8, w: 6, h: 12, kind: "wet" },
  { id: "ld", label: "Laundry", x: 11, y: 0, w: 7, h: 6, kind: "wet" },
  { id: "k", label: "Kitchen", x: 18, y: 0, w: 8, h: 8, kind: "kitchen" },
  { id: "lr", label: "Living", x: 18, y: 8, w: 16, h: 12, kind: "room" },
  { id: "v", label: "Deck", x: 34, y: 4, w: 8, h: 16, kind: "deck" },
]);

const P202613 = plan("202613", "20×34 · 2 bed, 1 bath", 34, 20, 2, 1, [
  { id: "m", label: "Bedroom", x: 0, y: 0, w: 12, h: 20, kind: "room" },
  { id: "ba", label: "Bath", x: 12, y: 0, w: 6, h: 11, kind: "wet" },
  { id: "k", label: "Kitchen", x: 18, y: 0, w: 16, h: 8, kind: "kitchen" },
  { id: "b2", label: "Bedroom", x: 25, y: 8, w: 9, h: 12, kind: "room" },
  { id: "lr", label: "Living", x: 12, y: 11, w: 13, h: 9, kind: "room" },
  { id: "v", label: "Deck", x: 8, y: 20, w: 20, h: 8, kind: "deck" },
]);

const P202636 = plan("202636", "20×34 · 2 bed, 2 bath", 34, 20, 2, 2, [
  { id: "b1", label: "Bedroom", x: 0, y: 0, w: 14, h: 10, kind: "room" },
  { id: "ba", label: "Bath", x: 14, y: 0, w: 5, h: 10, kind: "wet" },
  { id: "b2", label: "Bedroom", x: 0, y: 10, w: 11, h: 10, kind: "room" },
  { id: "ba2", label: "Bath", x: 0, y: 14, w: 6, h: 6, kind: "wet" },
  { id: "lr", label: "Living", x: 11, y: 10, w: 14, h: 10, kind: "room" },
  { id: "k", label: "Kitchen", x: 19, y: 0, w: 15, h: 10, kind: "kitchen" },
  { id: "v", label: "6×20 veranda", x: 34, y: 2, w: 6, h: 18, kind: "deck" },
]);

const P202629 = plan("202629", "16×24 · 1 bed, 1 bath", 24, 16, 1, 1, [
  { id: "b", label: "Bedroom", x: 0, y: 0, w: 10, h: 10, kind: "room" },
  { id: "ba", label: "Bath", x: 0, y: 10, w: 10, h: 6, kind: "wet" },
  { id: "k", label: "Kitchen + living", x: 10, y: 0, w: 14, h: 16, kind: "kitchen" },
  { id: "v", label: "6×16 veranda", x: 24, y: 0, w: 6, h: 16, kind: "deck" },
]);

const P202627 = plan("202627", "16×24 · 2 bed, 1 bath", 24, 16, 2, 1, [
  { id: "b1", label: "Bedroom", x: 0, y: 0, w: 8, h: 8, kind: "room" },
  { id: "ba", label: "Bath", x: 8, y: 0, w: 5, h: 8, kind: "wet" },
  { id: "k", label: "Kitchen", x: 13, y: 0, w: 11, h: 8, kind: "kitchen" },
  { id: "b2", label: "Bedroom", x: 0, y: 8, w: 8, h: 8, kind: "room" },
  { id: "lr", label: "Living", x: 8, y: 8, w: 16, h: 8, kind: "room" },
  { id: "v", label: "Deck", x: 24, y: 2, w: 6, h: 14, kind: "deck" },
]);

const P202630 = plan("202630", "16×16 studio", 16, 16, 0, 1, [
  { id: "ba", label: "Bath", x: 0, y: 0, w: 6, h: 8, kind: "wet" },
  { id: "k", label: "Kitchenette", x: 0, y: 8, w: 6, h: 8, kind: "kitchen" },
  { id: "lr", label: "Studio", x: 6, y: 0, w: 10, h: 16, kind: "room" },
  { id: "v", label: "4×14 veranda", x: 2, y: 16, w: 14, h: 4, kind: "deck" },
]);

const P21030 = plan("21030", "16×20 · 1 bed, 1 bath", 20, 16, 1, 1, [
  { id: "ba", label: "Bath", x: 0, y: 0, w: 9, h: 6, kind: "wet" },
  { id: "b", label: "Bedroom", x: 0, y: 6, w: 9, h: 10, kind: "room" },
  { id: "k", label: "Kitchen + living", x: 9, y: 0, w: 11, h: 16, kind: "kitchen" },
  { id: "v", label: "6×16 veranda", x: 20, y: 0, w: 6, h: 16, kind: "deck" },
]);

const P21026 = plan("21026", "16×20 studio", 20, 16, 0, 1, [
  { id: "k", label: "Kitchen", x: 0, y: 0, w: 8, h: 8, kind: "kitchen" },
  { id: "ba", label: "Bath", x: 0, y: 8, w: 7, h: 8, kind: "wet" },
  { id: "lr", label: "Studio", x: 8, y: 0, w: 12, h: 16, kind: "room" },
  { id: "v", label: "6×16 veranda", x: 20, y: 0, w: 6, h: 16, kind: "deck" },
]);

const P202620 = plan("202620", "20×20 · 1 bed, 1 bath", 20, 20, 1, 1, [
  { id: "k", label: "Kitchen", x: 0, y: 6, w: 10, h: 14, kind: "kitchen" },
  { id: "b", label: "Bedroom", x: 10, y: 0, w: 10, h: 12, kind: "room" },
  { id: "ba", label: "Bath", x: 10, y: 12, w: 10, h: 8, kind: "wet" },
  { id: "v", label: "6×20 veranda", x: 0, y: 0, w: 10, h: 6, kind: "deck" },
]);

const P202634 = plan("202634", "14×20 studio", 20, 14, 0, 1, [
  { id: "k", label: "Kitchen", x: 0, y: 0, w: 8, h: 8, kind: "kitchen" },
  { id: "ba", label: "Bath", x: 0, y: 8, w: 6, h: 6, kind: "wet" },
  { id: "lr", label: "Studio", x: 8, y: 0, w: 12, h: 14, kind: "room" },
  { id: "v", label: "6×12 veranda", x: 8, y: 14, w: 12, h: 6, kind: "deck" },
]);

const P202623 = plan("202623", "16×20 · 1 bed, 1 bath", 20, 16, 1, 1, [
  { id: "b", label: "Bedroom", x: 0, y: 0, w: 11, h: 9, kind: "room" },
  { id: "ba", label: "Bath", x: 11, y: 0, w: 9, h: 7, kind: "room" },
  { id: "k", label: "Kitchen + living", x: 0, y: 9, w: 20, h: 7, kind: "kitchen" },
  { id: "v", label: "Deck", x: 0, y: 16, w: 20, h: 4, kind: "deck" },
]);

const P202622 = plan("202622", "14×16 loft cabin", 16, 14, 1, 1, [
  { id: "ba", label: "Bath", x: 0, y: 0, w: 6, h: 6, kind: "wet" },
  { id: "k", label: "Kitchen", x: 6, y: 0, w: 10, h: 6, kind: "kitchen" },
  { id: "lr", label: "Living", x: 0, y: 6, w: 16, h: 8, kind: "room" },
  { id: "v", label: "Deck", x: 0, y: 14, w: 16, h: 4, kind: "deck" },
]);

const P21012 = plan("21012", "20×30 · 2 bed, 1 bath", 30, 20, 2, 1, [
  { id: "b1", label: "Bedroom", x: 0, y: 0, w: 12, h: 12, kind: "room" },
  { id: "b2", label: "Bedroom", x: 0, y: 12, w: 8, h: 8, kind: "room" },
  { id: "ba", label: "Bath", x: 12, y: 0, w: 6, h: 8, kind: "wet" },
  { id: "k", label: "Kitchen", x: 18, y: 0, w: 12, h: 8, kind: "kitchen" },
  { id: "lr", label: "Living", x: 8, y: 8, w: 22, h: 12, kind: "room" },
  { id: "v", label: "8×12 veranda", x: 30, y: 8, w: 8, h: 12, kind: "deck" },
]);

const P202628 = plan("202628", "20×30 · 3 bed, 1 bath", 30, 20, 3, 1, [
  { id: "b1", label: "Bedroom", x: 0, y: 0, w: 10, h: 10, kind: "room" },
  { id: "b2", label: "Bedroom", x: 0, y: 10, w: 10, h: 10, kind: "room" },
  { id: "ba", label: "Bath", x: 10, y: 0, w: 7, h: 10, kind: "wet" },
  { id: "b3", label: "Bedroom", x: 17, y: 0, w: 13, h: 10, kind: "room" },
  { id: "k", label: "Kitchen", x: 10, y: 10, w: 10, h: 10, kind: "kitchen" },
  { id: "lr", label: "Living", x: 20, y: 10, w: 10, h: 10, kind: "room" },
  { id: "v", label: "6×20 veranda", x: 30, y: 4, w: 6, h: 16, kind: "deck" },
]);

function home(
  lot: number,
  band: BandId,
  p: Plan,
  skin: SkinId,
  price: number,
  note: string,
): Home {
  return {
    lot,
    band,
    plan: p,
    skin,
    title: SKINS[skin].label,
    price,
    note,
  };
}

export const HOMES: Home[] = [
  home(196, "beach", P202639, "white-bungalow", 248000, "Full-width teak veranda facing the bay."),
  home(197, "beach", P21003, "mint-cottage", 252000, "Sea-glass cottage with a small plunge pool."),
  home(198, "beach", P202638, "teak-lodge", 246000, "Oiled teak lodge, 8×34 veranda to the sand."),
  home(199, "beach", P202631, "elevated", 255000, "Raised screened porch, twin stairs to the beach."),

  home(103, "canal", P202611, "white-porch", 198000, "400 sq ft teak deck at the 5 ft canal bank."),
  home(104, "canal", P21009, "teak-lodge", 212000, "Three-bed lodge, kayak steps to the water."),
  home(105, "canal", P202628, "board-batten", 218000, "Board-and-batten loft cottage over the canal."),
  home(106, "canal", P21013, "linear-bungalow", 205000, "Glass living wall, deck almost at the water."),
  home(107, "canal", P202625, "wrap-cottage", 216000, "L-wrap porch facing the inland canal."),

  home(108, "canal-value", P202633, "white-bungalow", 199000, "400 sq ft canal deck, salt-white bungalow."),
  home(109, "canal-value", P21012, "teak-lodge", 208000, "Kayak walkway down the 5 ft bank."),
  home(110, "canal-value", P202611, "mint-cottage", 196000, "Sea-glass clapboard, unfurnished shell."),
  home(111, "canal-value", P21009, "yellow-cottage", 214000, "Sun cottage on the far canal."),
  home(112, "canal-value", P202630, "studio-cottage", 188000, "Studio cottage with a small veranda."),
  home(113, "canal-value", P21013, "linear-bungalow", 205000, "Linear clapboard, canal-end glass."),
  home(114, "canal-value", P202625, "wrap-cottage", 210000, "L-plan, last lot on the inland canal."),

  home(234, "park", P202621, "white-bungalow", 228000, "Park street, 20×34 salt bungalow."),
  home(235, "park", P202613, "teak-lodge", 232000, "Teak lodge facing the interior street."),
  home(236, "park", P202636, "mint-cottage", 236000, "Two-bath sea-glass cottage."),
  home(237, "park", P202621, "elevated", 238000, "Raised screened porch on park street."),
  home(238, "park", P202613, "white-porch", 226000, "White porch cottage, 20×34."),
  home(239, "park", P202636, "grey-gable", 234000, "Grey gable on the park row."),

  home(241, "street", P202629, "white-porch", 186000, "One-bed porch cottage, street view."),
  home(252, "street", P202627, "mint-cottage", 192000, "Two-bed 16×24, sea-glass skin."),
  home(253, "street", P202630, "studio-cottage", 182000, "16×16 studio, compact veranda."),
  home(254, "street", P21030, "white-bungalow", 188000, "16×20 one-bed bungalow."),
  home(255, "street", P21026, "yellow-cottage", 190000, "Studio-style 16×20, sun cottage."),
  home(256, "street", P202620, "teak-lodge", 194000, "20×20 one-bed lodge."),
  home(257, "street", P202634, "grey-gable", 184000, "14×20 studio, grey gable."),
  home(258, "street", P202623, "board-batten", 189000, "16×20 one-bed, loft cottage."),
  home(259, "street", P202622, "tiny-loft", 180000, "14×16 loft cabin, smallest on the street."),

  home(330, "gate", P202611, "white-bungalow", 198000, "First house inside the gate."),
  home(315, "gate", P21009, "teak-lodge", 212000, "On the entrance road after 330."),
  home(314, "gate", P202628, "board-batten", 218000, "Loft cottage on the gated drive."),
  home(169, "gate", P202627, "white-porch", 192000, "Porch cottage on the gate road."),
  home(168, "gate", P202630, "studio-cottage", 188000, "Studio cottage facing the drive."),
  home(167, "gate", P21013, "yellow-cottage", 205000, "Sun cottage on the entrance street."),
  home(165, "gate", P202625, "wrap-cottage", 210000, "L-wrap, last of the gate row."),
];

export const BANDS: {
  id: BandId;
  label: string;
  kicker: string;
  blurb: string;
  aerial: string;
  lots: string;
  price: string;
}[] = [
  {
    id: "beach",
    label: "Beach 196–199",
    kicker: "20×40 · bay front",
    blurb: "The large Plett plans. Four mixed wood styles on quarter-acre lots facing the open bay, not the canal.",
    aerial: "/homes/aerial-beach.jpg",
    lots: "#196 – #199",
    price: "Unfurnished from $246k",
  },
  {
    id: "canal",
    label: "Canal 103–107",
    kicker: "20×30 · middle plans",
    blurb: "Middle-size wood homes on the inland canal, furthest from the ocean. 400 sq ft teak decks at a 5 ft drop to the water.",
    aerial: "/homes/aerial-canal.jpg",
    lots: "#103 – #107",
    price: "Unfurnished $198–218k",
  },
  {
    id: "park",
    label: "Park 234–239",
    kicker: "20×34 · medium",
    blurb: "Medium Plett plans along the interior park street. Mixed clapboard skins, same unfurnished wood shell.",
    aerial: "/homes/aerial-park.jpg",
    lots: "#234 – #239",
    price: "Unfurnished $226–238k",
  },
  {
    id: "street",
    label: "Street 241, 252–259",
    kicker: "16×24 and smaller",
    blurb: "The small Plett plans on street-view lots. Best for a year lease or a tight Airbnb.",
    aerial: "/homes/aerial-street.jpg",
    lots: "#241, #252–259",
    price: "Unfurnished $180–194k",
  },
  {
    id: "gate",
    label: "Gate row",
    kicker: "Entrance road",
    blurb: "The gate sits beside lot 330. One crushed-stone road runs past every home. About a 20-minute walk to the beach.",
    aerial: "/homes/aerial-gate.jpg",
    lots: "#330, 315, 314, 169, 168, 167, 165",
    price: "Unfurnished $180–250k",
  },
  {
    id: "canal-value",
    label: "Canal value 108–114",
    kicker: "Far canal · better price",
    blurb: "More mixed wood models on the far canal. Same 400 sq ft decks and kayak steps. Unfurnished shells.",
    aerial: "/homes/aerial-canal.jpg",
    lots: "#108 – #114",
    price: "Unfurnished $180–250k",
  },
];

export function homesIn(band: BandId) {
  return HOMES.filter((h) => h.band === band);
}

export function findHome(lot: number) {
  return HOMES.find((h) => h.lot === lot);
}

export const PALETTE = [
  { name: "Limewash", hex: "#f7f3ea", use: "Walls, ceiling" },
  { name: "Sand linen", hex: "#e6d7c3", use: "Optional textiles" },
  { name: "Sea glass", hex: "#8aa58a", use: "Accent panels" },
  { name: "Teak", hex: "#8b5e3c", use: "Millwork, decks" },
  { name: "Lagoon", hex: "#2f6f6a", use: "Doors, trim" },
  { name: "Ink", hex: "#1b2420", use: "Frames, hardware" },
];

export const SHELL_INCLUDES = [
  "Stick-built wood structure from the Plett catalog",
  "Hip or gable roof, windows, and exterior doors",
  "Teak or timber veranda as drawn on the plan",
  "Empty kitchen millwork — no appliances",
  "Bath rough-in: vanity niche, toilet, shower stall",
  "Electrical and mini-split ready, condenser not packed",
  "Limewash interior walls, oiled teak floors",
  "No furniture, rugs, lighting kit, or loose pieces",
];

export const CONTAINER_SITE = "https://moonlightbaycontainerhomes.vercel.app";
export const WOOD_SITE = "https://moonlightbaywoodhomes.vercel.app";
