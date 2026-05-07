import PageShell, { Tba } from '../../components/PageShell';

export const metadata = { title: 'Accommodations — PacificVis 2027' };

export default function Page() {
  return (
    <PageShell eyebrow="Travel" title="Accommodations">
      <p className="lead">
        Busan offers a wide range of accommodations — from international hotel
        chains in Haeundae and Centum City to boutique stays in Nampo-dong
        and the lively Seomyeon district. A list of recommended hotels with
        negotiated rates will be published as agreements are confirmed.
      </p>
      <Tba />
    </PageShell>
  );
}
