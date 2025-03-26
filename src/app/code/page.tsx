import Embed from '@components/components/code/Embed';
import { Headline, Grid } from '@components/components/shared';

export default function Code() {
  return (
    <div style={{
      height: '100vh',
      width: '100%',
    }}>
      <div
        style={{
          borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
          height: 56,
          overflow: 'hidden',
        }}
      >
        <Grid
          style={{
            padding: 12,
            height: 56,
            alignItems: 'center',
            gridColumnGap: 8,
            justifyContent: 'start',
            gridTemplateColumns: 'auto 1fr',
          }}
        >
          <svg dangerouslySetInnerHTML={{
            __html: `
<svg xmlns="http://www.w3.org/2000/svg" width="1585" height="1200" viewBox="0 0 1585 1200" fill="none">
  <path d="M959.066 0.000156824L625.312 0L0 1200L335.625 1200L623.437 647.679V1200H959.062V0.00718452L959.066 0.000156824Z" fill="#0500FF"/>
  <path d="M1248.75 0.000220868H1584.37V1200H1248.75V0.000220868Z" fill="#0500FF"/>
</svg>
            `,
          }} data-name="Ebene 1" height={24} id="Ebene_1" viewBox="0 0 433 97" width={24 * 433 / 97}
          />
          <Headline>Your logo and title</Headline>
        </Grid>
      </div>

      <Embed />
    </div>
  );
}
