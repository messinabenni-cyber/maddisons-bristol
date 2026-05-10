export interface Area {
  slug: string;
  name: string;
  // URL prefix on live site is /areas/car-body-repair-{slug}/
  // We use the canonical 14 priority pages.
  h1: string;
  title: string;
  metaDescription: string;
  cardCopy: string;
  // Whether the area has a fully built dedicated page
  hasOwnPage: boolean;
}

export const areas: Area[] = [
  {
    slug: "bath",
    name: "Bath",
    h1: "BODY REPAIR BATH",
    title: "Body Repair Bath | Maddisons",
    metaDescription:
      "Professional body repair Bath services by Maddisons. Expert car body repairs, dent removal and paint restoration for Bath residents.",
    cardCopy:
      "Professional body repair Bath services by Maddisons. Expert car body repairs, dent removal and paint restoration for Bath residents.",
    hasOwnPage: true,
  },
  {
    slug: "bedminster",
    name: "Bedminster",
    h1: "BODY REPAIR BEDMINSTER",
    title: "Body Repair Bedminster | Maddisons",
    metaDescription:
      "Professional body repair Bedminster services by Maddisons. Expert car body repairs, dent removal and paint restoration in Bedminster.",
    cardCopy:
      "Professional body repair Bedminster services by Maddisons. Expert car body repairs, dent removal and paint restoration in Bedminster.",
    hasOwnPage: true,
  },
  {
    slug: "brislington",
    name: "Brislington",
    h1: "BODY REPAIR BRISLINGTON",
    title: "Body Repair Brislington | Maddisons",
    metaDescription:
      "Professional body repair Brislington services by Maddisons. Expert car body repairs, dent removal and paint restoration in Brislington.",
    cardCopy:
      "Professional body repair Brislington services by Maddisons. Expert car body repairs, dent removal and paint restoration in Brislington.",
    hasOwnPage: true,
  },
  {
    slug: "clifton",
    name: "Clifton",
    h1: "BODY REPAIR CLIFTON",
    title: "Body Repair Clifton | Maddisons",
    metaDescription:
      "Professional body repair Clifton services by Maddisons. Expert car body repairs, dent removal and paint restoration for Clifton residents.",
    cardCopy:
      "Professional body repair Clifton services by Maddisons. Expert car body repairs, dent removal and paint restoration for Clifton residents.",
    hasOwnPage: true,
  },
  {
    slug: "filton",
    name: "Filton",
    h1: "BODY REPAIR FILTON",
    title: "Body Repair Filton | Maddisons",
    metaDescription:
      "Professional body repair Filton services by Maddisons. Expert car body repairs, dent removal and paint restoration for Filton residents.",
    cardCopy:
      "Professional body repair Filton services by Maddisons. Expert car body repairs, dent removal and paint restoration for Filton residents.",
    hasOwnPage: true,
  },
  {
    slug: "fishponds",
    name: "Fishponds",
    h1: "BODY REPAIR FISHPONDS",
    title: "Body Repair Fishponds | Maddisons",
    metaDescription:
      "Professional body repair Fishponds services by Maddisons. Expert car body repairs, dent removal and paint restoration in Fishponds.",
    cardCopy:
      "Professional body repair Fishponds services by Maddisons. Expert car body repairs, dent removal and paint restoration in Fishponds.",
    hasOwnPage: true,
  },
  {
    slug: "hengrove",
    name: "Hengrove",
    h1: "BODY REPAIR HENGROVE",
    title: "Body Repair Hengrove | Maddisons",
    metaDescription:
      "Professional body repair Hengrove services by Maddisons. Expert car body repairs, dent removal and paint restoration in Hengrove.",
    cardCopy:
      "Professional body repair Hengrove services by Maddisons. Expert car body repairs, dent removal and paint restoration in Hengrove.",
    hasOwnPage: true,
  },
  {
    slug: "keynsham",
    name: "Keynsham",
    h1: "BODY REPAIR KEYNSHAM",
    title: "Body Repair Keynsham | Maddisons",
    metaDescription:
      "Professional body repair Keynsham services by Maddisons. Expert car body repairs, dent removal and paint restoration for Keynsham.",
    cardCopy:
      "Professional body repair Keynsham services by Maddisons. Expert car body repairs, dent removal and paint restoration for Keynsham.",
    hasOwnPage: true,
  },
  {
    slug: "kingswood",
    name: "Kingswood",
    h1: "BODY REPAIR KINGSWOOD",
    title: "Body Repair Kingswood | Maddisons",
    metaDescription:
      "Professional body repair Kingswood services by Maddisons. Expert car body repairs, dent removal and paint restoration in Kingswood.",
    cardCopy:
      "Professional body repair Kingswood services by Maddisons. Expert car body repairs, dent removal and paint restoration in Kingswood.",
    hasOwnPage: true,
  },
  {
    slug: "knowle",
    name: "Knowle",
    h1: "BODY REPAIR KNOWLE",
    title: "Body Repair Knowle | Maddisons",
    metaDescription:
      "Professional body repair Knowle services by Maddisons. Expert car body repairs, dent removal and paint restoration for Knowle residents.",
    cardCopy:
      "Professional body repair Knowle services by Maddisons. Expert car body repairs, dent removal and paint restoration for Knowle residents.",
    hasOwnPage: true,
  },
  {
    slug: "longwell-green",
    name: "Longwell Green",
    h1: "BODY REPAIR LONGWELL GREEN",
    title: "Body Repair Longwell Green | Maddisons",
    metaDescription:
      "Professional body repair Longwell Green services by Maddisons. Expert car body repairs, dent removal and paint restoration near you.",
    cardCopy:
      "Professional body repair Longwell Green services by Maddisons. Expert car body repairs, dent removal and paint restoration near you.",
    hasOwnPage: true,
  },
  {
    slug: "southville",
    name: "Southville",
    h1: "BODY REPAIR SOUTHVILLE",
    title: "Body Repair Southville | Maddisons",
    metaDescription:
      "Professional body repair Southville services by Maddisons. Expert car body repairs, dent removal and paint restoration in Southville.",
    cardCopy:
      "Professional body repair Southville services by Maddisons. Expert car body repairs, dent removal and paint restoration in Southville.",
    hasOwnPage: true,
  },
  {
    slug: "stockwood",
    name: "Stockwood",
    h1: "BODY REPAIR STOCKWOOD",
    title: "Body Repair Stockwood | Maddisons",
    metaDescription:
      "Professional body repair Stockwood services by Maddisons. Expert car body repairs, dent removal and paint restoration in Stockwood.",
    cardCopy:
      "Professional body repair Stockwood services by Maddisons. Expert car body repairs, dent removal and paint restoration in Stockwood.",
    hasOwnPage: true,
  },
  {
    slug: "whitchurch",
    name: "Whitchurch",
    h1: "BODY REPAIR WHITCHURCH",
    title: "Body Repair Whitchurch | Maddisons",
    metaDescription:
      "Professional body repair Whitchurch services by Maddisons. Expert car body repairs, dent removal and paint restoration in Whitchurch.",
    cardCopy:
      "Professional body repair Whitchurch services by Maddisons. Expert car body repairs, dent removal and paint restoration in Whitchurch.",
    hasOwnPage: true,
  },
  // Secondary areas (mentioned on areas index but no dedicated pages on live site)
  {
    slug: "bishopston",
    name: "Bishopston",
    h1: "BODY REPAIR BISHOPSTON",
    title: "Body Repair Bishopston | Maddisons",
    metaDescription:
      "Body repair Bishopston drivers can rely on for dents, bumper damage, accident repairs, and paintwork with a clear Bristol workshop handover.",
    cardCopy:
      "Body repair Bishopston drivers can rely on for dents, bumper damage, accident repairs, and paintwork with a clear Bristol workshop handover.",
    hasOwnPage: false,
  },
  {
    slug: "bradley-stoke",
    name: "Bradley Stoke",
    h1: "BODY REPAIR BRADLEY STOKE",
    title: "Body Repair Bradley Stoke | Maddisons",
    metaDescription:
      "Body repair Bradley Stoke motorists can use for insurance work, dent removal, bumper repairs, and paint restoration with straightforward advice.",
    cardCopy:
      "Body repair Bradley Stoke motorists can use for insurance work, dent removal, bumper repairs, and paint restoration with straightforward advice.",
    hasOwnPage: false,
  },
  {
    slug: "downend",
    name: "Downend",
    h1: "BODY REPAIR DOWNEND",
    title: "Body Repair Downend | Maddisons",
    metaDescription:
      "Body repair Downend customers can turn to for dent removal, resprays, bumper repairs, and insurance-approved accident work near Bristol.",
    cardCopy:
      "Body repair Downend customers can turn to for dent removal, resprays, bumper repairs, and insurance-approved accident work near Bristol.",
    hasOwnPage: false,
  },
  {
    slug: "horfield",
    name: "Horfield",
    h1: "BODY REPAIR HORFIELD",
    title: "Body Repair Horfield | Maddisons",
    metaDescription:
      "Body repair Horfield drivers can choose for careful panel work, paint matching, accident repairs, and clear communication from first contact.",
    cardCopy:
      "Body repair Horfield drivers can choose for careful panel work, paint matching, accident repairs, and clear communication from first contact.",
    hasOwnPage: false,
  },
  {
    slug: "redland",
    name: "Redland",
    h1: "BODY REPAIR REDLAND",
    title: "Body Repair Redland | Maddisons",
    metaDescription:
      "Body repair Redland owners can book for premium paintwork, dent correction, bumper repairs, and insurer-supported accident restoration.",
    cardCopy:
      "Body repair Redland owners can book for premium paintwork, dent correction, bumper repairs, and insurer-supported accident restoration.",
    hasOwnPage: false,
  },
  {
    slug: "staple-hill",
    name: "Staple Hill",
    h1: "BODY REPAIR STAPLE HILL",
    title: "Body Repair Staple Hill | Maddisons",
    metaDescription:
      "Body repair Staple Hill residents can use for precision dent removal, resprays, panel repairs, and practical support after vehicle damage.",
    cardCopy:
      "Body repair Staple Hill residents can use for precision dent removal, resprays, panel repairs, and practical support after vehicle damage.",
    hasOwnPage: false,
  },
  {
    slug: "westbury-on-trym",
    name: "Westbury-on-Trym",
    h1: "BODY REPAIR WESTBURY-ON-TRYM",
    title: "Body Repair Westbury-on-Trym | Maddisons",
    metaDescription:
      "Body repair Westbury-on-Trym motorists can depend on for exact paint matching, dent removal, bumper work, and high-standard accident repairs.",
    cardCopy:
      "Body repair Westbury-on-Trym motorists can depend on for exact paint matching, dent removal, bumper work, and high-standard accident repairs.",
    hasOwnPage: false,
  },
  {
    slug: "yate",
    name: "Yate",
    h1: "BODY REPAIR YATE",
    title: "Body Repair Yate | Maddisons",
    metaDescription:
      "Body repair Yate drivers can arrange for structural bodywork, paint matching, insurance repairs, and workshop guidance from the first call.",
    cardCopy:
      "Body repair Yate drivers can arrange for structural bodywork, paint matching, insurance repairs, and workshop guidance from the first call.",
    hasOwnPage: false,
  },
];

export const priorityAreas = areas.filter((a) => a.hasOwnPage);

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
