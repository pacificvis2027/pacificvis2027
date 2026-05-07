import PageShell from '../../components/PageShell';

export const metadata = { title: 'Keynotes — PacificVis 2027' };

const KEYNOTES = [
  { name: 'Speaker TBA', affiliation: 'To be announced', talk: 'Title forthcoming' },
  { name: 'Speaker TBA', affiliation: 'To be announced', talk: 'Title forthcoming' },
];

export default function Page() {
  return (
    <PageShell eyebrow="Program" title="Keynote Speakers">
      <p className="lead">
        Distinguished researchers will share their vision for the future of
        visualization at PacificVis 2027. Speakers and titles will be
        announced in due course.
      </p>
      <ul className="mt-3 grid gap-5 sm:grid-cols-2">
        {KEYNOTES.map((k, i) => (
          <li key={i} className="border border-slate-200 p-5">
            <p className="h3">{k.name}</p>
            <p className="text-sm text-slate-500">{k.affiliation}</p>
            <p className="mt-3 text-sm italic text-slate-700">{k.talk}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
