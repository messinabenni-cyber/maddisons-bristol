export interface CaseStudy {
  number: string;
  headline: string;
  vehicle: string;
  location: string;
  service: string;
  timing: string;
  beforeText: string;
  afterText: string;
  challenge: string;
  approach: string;
  outcome: string;
  highlights: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    headline:
      "Rear bumper corner repair with colour-matched refinishing",
    vehicle: "Family hatchback",
    location: "Brislington, Bristol",
    service: "Bumper repair and paintwork",
    timing: "Assessment-first scheduling with staged prep and refinishing",
    beforeText:
      "Scuffed bumper corner, broken paint surface, and visible impact marking",
    afterText:
      "Straightened bumper corner with cleaner surface finish and matched paint presentation",
    challenge:
      "A low-speed impact left the bumper corner split, scuffed, and visibly out of line with surrounding paint. The owner needed a tidy finish without vague promises about timing or insurer handling.",
    approach:
      "The repair route focused on panel preparation, careful reshaping, bumper repair, and controlled refinishing so the repaired area sat back into the surrounding bodywork cleanly.",
    outcome:
      "The finished bumper line looked consistent, the damaged area no longer distracted from the rest of the vehicle, and the customer had a clearer handover path than they expected at first contact.",
    highlights: [
      "Useful for drivers comparing repair versus replacement",
      "Shows how cosmetic and structural-looking bumper damage can often be assessed clearly",
      "Reinforces Maddisons' photo-first estimate route for faster early guidance",
    ],
  },
  {
    number: "02",
    headline:
      "Dent and crease repair with panel preparation and paint correction",
    vehicle: "Compact SUV",
    location: "Keynsham",
    service: "Dent removal and paint repair",
    timing: "Quoted after photo review and workshop inspection",
    beforeText: "Creased side panel with visible distortion catching the light",
    afterText:
      "Panel line restored with a more even finish and reduced visual disruption",
    challenge:
      "The vehicle arrived with a crease through a side panel and local paint damage that made the car look much worse than the owner expected from the original incident.",
    approach:
      "Maddisons' route combined panel correction, surface preparation, and refinishing to restore the damaged area without leaving the repair visually disconnected from the rest of the vehicle.",
    outcome:
      "The corrected panel sat more naturally within the body line, the finish looked far cleaner, and the customer had a documented next-step path from first enquiry through to collection.",
    highlights: [
      "Useful for customers worried that dents always mean a replacement panel",
      "Demonstrates finish quality as well as straightening work",
      "Supports conversion on service and area pages with tangible repair outcomes",
    ],
  },
  {
    number: "03",
    headline: "Scrape repair around the wheel arch with localised paint restoration",
    vehicle: "Executive saloon",
    location: "Filton",
    service: "Scratch repair and paint restoration",
    timing: "Planned around customer availability and workshop load",
    beforeText: "Scraped arch and lower panel with rubbed-through finish",
    afterText: "Cleaner wheel-arch presentation with refinished damaged section",
    challenge:
      "A long scrape around the arch and lower side section left the car looking tired and made the owner concerned that the damage would spread attention across multiple panels.",
    approach:
      "The repair required careful preparation around the damaged section, a disciplined paint process, and finish control so the repaired area felt integrated rather than patched.",
    outcome:
      "The repaired section read as part of the original bodywork again, the finish felt cleaner and more premium, and the customer had better confidence in the vehicle's presentation at handover.",
    highlights: [
      "Useful for drivers comparing cosmetic repair options before selling or returning a vehicle",
      "Shows Maddisons can handle awkward visible damage, not just large accident work",
      "Pairs naturally with paintwork and scratch-repair landing pages",
    ],
  },
];
