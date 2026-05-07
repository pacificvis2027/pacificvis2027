import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Posters — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Posters">
      <p className="lead">
        The Posters track showcases work-in-progress, late-breaking results,
        and student research. Posters provide an excellent opportunity to
        receive feedback and engage in discussions with the visualization
        community.
      </p>
      <Tba />
    </PageShell>
  );
}
