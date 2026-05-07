import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Short Papers (VisNotes) — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Short Papers (VisNotes)">
      <p className="lead">
        VisNotes are concise contributions that present novel ideas,
        late-breaking results, or systems. They offer a venue for compact yet
        impactful contributions that complement full Conference Papers.
      </p>
      <Tba />
    </PageShell>
  );
}
