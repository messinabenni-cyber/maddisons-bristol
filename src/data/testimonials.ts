export interface Testimonial {
  quote: string;
  author: string;
  area: string;
  context: string;
  framing: string;
}

// Workshop-held testimonials (deliberately not third-party platform reviews)
export const testimonials: Testimonial[] = [
  {
    quote:
      "Maddisons kept the process clear from the first call. The repair looked right, the updates were sensible, and I never felt pushed.",
    author: "Sarah M.",
    area: "Brislington",
    context: "Rear bumper and paint damage enquiry",
    framing: "Direct customer feedback held by workshop",
  },
  {
    quote:
      "They handled the insurer, explained the timeline properly, and returned the car looking sharp. Much easier than I expected.",
    author: "James T.",
    area: "Filton",
    context: "Insurance-related body repair",
    framing: "Direct customer feedback held by workshop",
  },
  {
    quote:
      "Good communication, no vague promises, and the finish on the panel work was excellent. I would use them again.",
    author: "Priya R.",
    area: "Keynsham",
    context: "Panel and paint finish repair",
    framing: "Direct customer feedback held by workshop",
  },
];
