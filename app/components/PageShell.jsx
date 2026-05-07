export default function PageShell({ title, eyebrow, children }) {
  return (
    <article className="container-page section">
      {eyebrow && (
        <p className="text-lg font-semibold uppercase tracking-[0.18em] text-slate-500">
          {eyebrow}
        </p>
      )}
      <h1 className="h1 mt-2">{title}</h1>
      <div className="mt-6 space-y-5">{children}</div>
    </article>
  );
}

export function Tba() {
  return (
    <p className="lead">
      More information will be posted on this page soon. Please check back
      closer to the conference dates.
    </p>
  );
}
