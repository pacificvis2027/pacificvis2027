import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Airport to Busan — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Travel" title="Airport to Busan">
      <p className="lead">
        Busan is served by <strong>Gimhae International Airport (PUS)</strong>,
        which connects with major hubs across the Asia-Pacific. Most overseas
        attendees will arrive at <strong>Incheon International Airport (ICN)</strong>{' '}
        in Seoul; from there, the KTX high-speed train and domestic flights
        offer quick onward connections to Busan.
      </p>
      <ul className="mt-3 list-disc pl-6 text-slate-700">
        <li>Gimhae (PUS) → Downtown Busan: ~30–45 min by light rail / taxi</li>
        <li>Incheon (ICN) → Busan via KTX: ~3 hours from Seoul Station</li>
        <li>Incheon (ICN) → Gimhae (PUS) domestic flight: ~1 hour</li>
      </ul>
      <Tba />
    </PageShell>
  );
}
