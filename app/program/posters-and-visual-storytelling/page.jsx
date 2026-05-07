import PageShell, { Tba } from '../../components/PageShell';

export const metadata = {
  title: 'Posters & Visual Storytelling — PacificVis 2027',
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Program"
      title="Posters & Visual Storytelling"
    >
      <p className="lead">
        The list of accepted posters and Visual Data Storytelling pieces will
        be published here once notifications are sent. The poster session and
        storytelling showcase will run in person during the conference.
      </p>
      <Tba />
    </PageShell>
  );
}
