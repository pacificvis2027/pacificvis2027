import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Reception — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Venue" title="Welcome Reception">
      <p className="lead">
        The PacificVis 2027 welcome reception will be held on the opening
        evening of the conference, providing an opportunity for participants
        to network with colleagues from the visualization community while
        enjoying Busan&rsquo;s coastal atmosphere.
      </p>
      <Tba />
    </PageShell>
  );
}
