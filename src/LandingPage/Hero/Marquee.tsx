const items = [
  "Tokyo in 72 hours",
  "Amalfi Coast, slow-travel edition",
  "Kyoto in cherry blossom season",
  "Patagonia off the beaten path",
  "Moroccan medinas & desert camps",
];

const separator = (
  <span className="text-amber mx-6 select-none" aria-hidden>
    ✦
  </span>
);

function Marquee() {
  const track = [...items, ...items].flatMap((item, i) => [
    <span
      key={`item-${i}`}
      className="font-mono text-xs uppercase tracking-widest text-cream-faint whitespace-nowrap"
    >
      {item}
    </span>,
    <span key={`sep-${i}`}>{separator}</span>,
  ]);

  return (
    <div className="w-full bg-deep-ink overflow-hidden border-y border-cream/10 py-3">
      <div className="flex items-center animate-marquee w-max">
        {/* Duplicated for seamless loop */}
        {track}
        {track}
      </div>
    </div>
  );
}

export default Marquee;
