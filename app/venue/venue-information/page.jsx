import PageShell from '../../components/PageShell';

export const metadata = { title: 'Venue Information — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Venue" title="Venue Information">
      <p className="lead">
        PacificVis 2027 will be hosted in <strong>Busan, South Korea</strong>{' '}
        — the country&rsquo;s second largest city and a global gateway port,
        known for its iconic beaches, the Gwangan Bridge, and a thriving
        creative-tech scene. The exact venue address, room layout, and
        on-site logistics will be announced as we approach the event.
      </p>

      <div className="mt-4 border border-slate-200">
        <iframe
          title="Map of Busan, South Korea"
          src="https://www.openstreetmap.org/export/embed.html?bbox=128.95%2C35.05%2C129.20%2C35.22&layer=mapnik&marker=35.1379%2C129.0756"
          className="h-[420px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex items-center justify-between border-t border-slate-200 px-4 py-2 text-xs text-slate-500">
          <span>Approximate location · Busan, South Korea</span>
          <a
            className="link"
            href="https://www.openstreetmap.org/?mlat=35.1379&mlon=129.0756#map=11/35.1379/129.0756"
            target="_blank"
            rel="noreferrer"
          >
            View larger map →
          </a>
        </div>
      </div>
    </PageShell>
  );
}
