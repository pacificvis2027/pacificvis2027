import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Banquet — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Venue" title="Conference Banquet">
      <p className="lead">
        The PacificVis 2027 banquet will showcase Busan&rsquo;s renowned
        seafood and Korean cuisine in a memorable seafront setting. Banquet
        date, location, and ticketing details will be announced.
      </p>
      <Tba />
    </PageShell>
  );
}
