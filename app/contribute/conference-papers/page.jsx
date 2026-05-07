import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Conference Papers — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Conference Papers">
      <p className="lead">
        The Conference Papers track invites original technical contributions
        across the breadth of visualization research, including (but not
        limited to) information visualization, scientific visualization, visual
        analytics, human-data interaction, and applications.
      </p>
      <Tba />
    </PageShell>
  );
}
