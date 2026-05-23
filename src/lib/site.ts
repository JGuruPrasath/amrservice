export const SITE = {
  name: "AMR Service",
  tagline: "Doorstep Home Appliance Repair in Coimbatore",
  phone: "+917904930828",
  phoneDisplay: "+91 79049 30828",
  whatsapp: "917904930828",
  email: "amrservicesald@gmail.com",
  address: "Siruvani Main Road, Alandurai, Coimbatore - 641101, Tamil Nadu",
  addressShort: "Alandurai, Coimbatore",
  youtube: "https://www.youtube.com/@premanandrangasamy2613",
  // Google Maps embed for the address
  mapEmbed:
    "https://www.google.com/maps?q=Siruvani+Main+Road,+Alandurai,+Coimbatore+641101&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Siruvani+Main+Road+Alandurai+Coimbatore+641101",
  areas: [
    "Coimbatore", "Alandurai", "RS Puram", "Erode", "Tiruppur", "Avinasi",
    "Annur", "Siruvani", "Sathy", "Madhampatty", "Perur", "Kuniamuthur",
    "Sundakkamuthur", "Vadavalli", "Selvapuram", "Palakkad–Pollachi Road",
  ],
} as const;

export const SERVICES = [
  {
    slug: "washing-machine",
    name: "Washing Machine Repair",
    short: "Front-load, top-load & semi-automatic",
    icon: "WashingMachine",
    desc: "Drum noise, spin issues, water leaks, error codes — all brands serviced same-day.",
  },
  {
    slug: "refrigerator",
    name: "Refrigerator / Fridge Repair",
    short: "Single, double door & side-by-side",
    icon: "Refrigerator",
    desc: "Gas refilling, cooling issues, compressor, thermostat and door seal repairs.",
  },
  {
    slug: "ac",
    name: "AC Service & Repair",
    short: "Split, window & inverter ACs",
    icon: "AirVent",
    desc: "Deep cleaning, gas top-up, installation, uninstallation and PCB repairs.",
  },
  {
    slug: "microwave",
    name: "Microwave Oven Repair",
    short: "Solo, grill & convection",
    icon: "Microwave",
    desc: "Magnetron, heating, turntable and control panel repair for all brands.",
  },
  {
    slug: "water-purifier",
    name: "Water Purifier Service",
    short: "RO, UV & UF systems",
    icon: "Droplets",
    desc: "Filter replacement, TDS adjustment, leakage fix and annual maintenance.",
  },
  {
    slug: "water-heater",
    name: "Water Heater / Geyser Repair",
    short: "Storage & instant geysers",
    icon: "Flame",
    desc: "Heating element, thermostat, leakage and installation services.",
  },
] as const;
