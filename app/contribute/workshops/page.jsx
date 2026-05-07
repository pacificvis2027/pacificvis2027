import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Workshops — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Workshops">
      <p className="lead">
        PacificVis 2027 will host focused full-day workshops on emerging
        topics in visualization. We will invite proposals from the community —
        watch this page for the proposal call and submission deadlines.
      </p>
      <Tba />
    </PageShell>
  );
}
