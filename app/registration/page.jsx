import PageShell, { Tba } from '../components/PageShell';

export const metadata = { title: 'Registration — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell title="Registration">
      <p className="lead">
        Registration for PacificVis 2027 will open in early 2027. The
        registration page will provide information on registration categories,
        fees, deadlines, on-site registration, and the cancellation policy.
      </p>

      <h2 className="h2 mt-6">Registration categories (tentative)</h2>
      <ul className="mt-3 list-disc pl-6 text-slate-700">
        <li>IEEE / IEEE CS member</li>
        <li>Non-member</li>
        <li>Student (IEEE / Non-member)</li>
        <li>One-day pass</li>
      </ul>

      <Tba />
    </PageShell>
  );
}
