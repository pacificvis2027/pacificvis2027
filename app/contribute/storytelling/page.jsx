import PageShell, { Tba } from '../../components/PageShell';

export const metadata = {
  title: 'Visual Data Storytelling Contest — PacificVis 2027',
};

export default function Page() {
  return (
    <PageShell
      eyebrow="Contribute"
      title="Visual Data Storytelling Contest"
    >
      <p className="lead">
        The Visual Data Storytelling Contest invites compelling stories told
        through interactive and narrative visualization formats. Submissions
        may include data-driven articles, scrollytelling pieces, dashboards,
        videos, or other narrative visualization artifacts.
      </p>
      <Tba />
    </PageShell>
  );
}
