import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Workshops — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Program" title="Workshops">
      <p className="lead">
        Once the workshop proposals are accepted, the list of co-located
        workshops with their dedicated calls will be published here.
      </p>
      <Tba />
    </PageShell>
  );
}
