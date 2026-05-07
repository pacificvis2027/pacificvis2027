import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Visa Information — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Travel" title="Visa Information">
      <p className="lead">
        Visa requirements for entry to South Korea depend on your nationality
        and length of stay. Many countries qualify for visa-free entry under
        K-ETA (Korea Electronic Travel Authorization). Please consult the
        official Korean Ministry of Foreign Affairs website for the most
        up-to-date information.
      </p>
      <ul className="mt-3 list-disc pl-6 text-slate-700">
        <li>
          K-ETA (Korea Electronic Travel Authorization):{' '}
          <a
            href="https://www.k-eta.go.kr/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            k-eta.go.kr
          </a>
        </li>
        <li>
          Korean visa portal:{' '}
          <a
            href="https://www.visa.go.kr/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            visa.go.kr
          </a>
        </li>
      </ul>
      <p className="muted">
        If you require an invitation letter for visa application, the
        Organizing Committee will provide one upon registration. Details will
        be added here.
      </p>
      <Tba />
    </PageShell>
  );
}
