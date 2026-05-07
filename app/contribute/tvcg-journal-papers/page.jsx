import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'TVCG Journal Papers — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="TVCG Journal Papers">
      <p className="lead">
        PacificVis 2027 will host a TVCG Journal track in cooperation with{' '}
        <em>IEEE Transactions on Visualization and Computer Graphics (TVCG)</em>
        . Accepted papers will be presented at the conference and published in a
        special section/issue of TVCG. Full submission guidelines, page limits,
        and review timeline will follow.
      </p>
      <Tba />
    </PageShell>
  );
}
