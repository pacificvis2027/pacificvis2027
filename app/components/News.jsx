const NEWS = [
  {
    date: 'Coming soon',
    body: 'Welcome to the official site for the 20th IEEE Pacific Visualization Conference, hosted in Busan, South Korea. Stay tuned for full details on the program, important dates, and registration.',
  },
  {
    date: 'Coming soon',
    body: 'Submission portals for TVCG Journal Papers, Conference Papers, Short Papers (VisNotes), Posters, and Visual Data Storytelling will open in the coming months.',
  },
  {
    date: 'Coming soon',
    body: 'We will invite proposals for workshops and tutorials on emerging topics in visualization. Watch this space for the proposal call.',
  },
];

export default function News() {
  return (
    <section id="news" className="section border-t border-slate-200">
      <div className="container-page">
        <h2 className="h2">News</h2>
        <ul className="mt-5 space-y-4">
          {NEWS.map((n, i) => (
            <li key={i} className="lead">
              <span className="mr-2 text-sm font-semibold text-slate-500">
                [{n.date}]
              </span>
              {n.body}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
