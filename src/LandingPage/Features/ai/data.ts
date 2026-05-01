export type ItineraryItem = {
  time: string;
  title: string;
  meta: string;
};

export type DayPlan = {
  day: number;
  label: string;
  items: ItineraryItem[];
};

export const tripData: DayPlan[] = [
  {
    day: 1,
    label: "Kochi Arrival · Fort Kochi",
    items: [
      { time: "09:00", title: "Kerala Folklore Museum", meta: "Edappaly · ★4.6 · 90 min" },
      { time: "11:00", title: "Fort Kochi waterfront walk", meta: "2.1 km · pedestrian · calm pace" },
      { time: "13:30", title: "Lunch at Kashi Art Café", meta: "Fort Kochi · quiet, local favourite" },
    ],
  },
  {
    day: 2,
    label: "Backwaters · Alleppey",
    items: [
      { time: "08:00", title: "Alleppey Houseboat cruise", meta: "Punnamada Lake · ★4.8 · 3 hrs" },
      { time: "12:00", title: "Pathiramanal Island walk", meta: "1.8 km · boat + walk · bird sanctuary" },
      { time: "15:00", title: "Ambalappuzha Paal Payasam", meta: "Temple prasad · iconic · free" },
    ],
  },
  {
    day: 3,
    label: "Munnar Hill Station",
    items: [
      { time: "07:30", title: "Eravikulam National Park", meta: "Rajamala · Nilgiri tahr habitat · 2 hrs" },
      { time: "11:00", title: "Top Station viewpoint", meta: "1,700 m · misty valley views · easy walk" },
      { time: "14:00", title: "Tata Tea Museum", meta: "Nallathanni · ★4.2 · 75 min" },
    ],
  },
  {
    day: 4,
    label: "Periyar Wildlife Reserve",
    items: [
      { time: "06:30", title: "Periyar Lake boat safari", meta: "Thekkady · ★4.7 · 2 hrs · book ahead" },
      { time: "10:00", title: "Spice plantation walk", meta: "Kumily · cardamom & pepper · 90 min" },
      { time: "15:30", title: "Kadathanadan Kalari show", meta: "Thekkady · martial arts · 1 hr" },
    ],
  },
  {
    day: 5,
    label: "Kovalam · Departure",
    items: [
      { time: "09:00", title: "Lighthouse Beach morning walk", meta: "Kovalam · sunrise light · easy stroll" },
      { time: "11:30", title: "Padmanabhapuram Palace", meta: "Thuckalay · 16th-century wood architecture" },
      { time: "14:00", title: "Ayurvedic farewell lunch", meta: "Kovalam · sattvic cuisine · slow meal" },
    ],
  },
];
