import PageShell, { Tba } from '../../components/PageShell';

export const metadata = {
  title: 'Paper Submission Guidelines — PacificVis 2027',
};

export default function Page() {
  return (
    <PageShell eyebrow="Contribute" title="Paper Submission Guidelines">
      <p className="lead">
        This page will host the unified submission guidelines for all PacificVis
        2027 paper tracks, including formatting templates, page limits,
        anonymity rules, supplemental materials policy, and information about
        the submission system.
      </p>
      <Tba />
    </PageShell>
  );
}
