import PageShell from '../../components/PageShell';

export const metadata = { title: 'Tourist Attractions — PacificVis 2027' };

const ATTRACTIONS = [
  { name: 'Haeundae Beach',                 desc: 'Busan’s most famous beach with skyline views and a lively boardwalk.' },
  { name: 'Gwangalli Beach & Gwangan Bridge', desc: 'Iconic suspension bridge illuminated each evening — best seen from the beach.' },
  { name: 'Gamcheon Culture Village',       desc: 'A pastel-colored hillside village often called the “Machu Picchu of Korea.”' },
  { name: 'Jagalchi Market',                desc: 'Korea’s largest seafood market, in the heart of old Busan.' },
  { name: 'Beomeosa Temple',                desc: 'A historic Buddhist temple at the foot of Geumjeongsan Mountain.' },
  { name: 'Taejongdae & Yeongdo Island',    desc: 'Coastal cliffs, lighthouses, and ocean views on Yeongdo Island.' },
  { name: 'Centum City',                    desc: 'Busan’s modern district with shopping, the Busan Cinema Center, and tech offices.' },
];

export default function Page() {
  return (
    <PageShell eyebrow="Travel" title="Tourist Attractions">
      <p className="lead">
        A few highlights of what Busan offers beyond the conference:
      </p>
      <ul className="mt-3 space-y-3">
        {ATTRACTIONS.map((a) => (
          <li key={a.name} className="border-l-2 border-ocean-700 pl-4">
            <p className="h3">{a.name}</p>
            <p className="muted">{a.desc}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
