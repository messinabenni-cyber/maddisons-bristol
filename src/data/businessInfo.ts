export const businessInfo = {
  name: "Maddisons Vehicle Body Repair",
  shortName: "Maddisons",
  tagline: "Vehicle Body Repair Specialists",
  ribbon:
    "CAREFUL WORKMANSHIP AND CLEAR REPAIR GUIDANCE · BRISTOL, BATH, FILTON, KEYNSHAM, KINGSWOOD AND NEARBY AREAS",
  phone: "0117 287 2485",
  phoneE164: "+441172872485",
  email: "quotes@maddisonsbristol.co.uk",
  address: {
    street: "Unit 12, Brislington Trading Estate",
    locality: "Bristol",
    postcode: "BS4",
    country: "GB",
  },
  hours: "Mon–Fri 8:00am–5:30pm",
  hoursStructured: "Mo-Fr 08:00-17:30",
  yearsExperience: 20,
  servicesCount: 11,
  areasCount: 14,
  // Domain placeholder — update before deploy
  domain: "https://www.maddisonsbristol.co.uk",
  // Social proof claim used in stats
  fastTriageSeconds: 60,
  // Schema-org category
  businessType: "AutoBodyShop",
};

export type BusinessInfo = typeof businessInfo;
