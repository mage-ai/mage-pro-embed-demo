import Embed from '@components/components/code/Embed';
import { Headline, Grid } from '@components/components/shared';

export default function Code() {
  const headerHeight = 56;
  return (
    <div style={{
      height: '100vh',
      width: '100%',
    }}>
      <div
        style={{
          borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
          height: 56,
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: '#FFFFFF',
          zIndex: 100,
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Grid
          style={{
            padding: 12,
            height: headerHeight,
            alignItems: 'center',
            gridColumnGap: 8,
            justifyContent: 'start',
            gridTemplateColumns: 'auto 1fr',
          }}
        >
          <svg dangerouslySetInnerHTML={{
            __html: `
<path d="M959.066 0.000156824L625.312 0L0 1200L335.625 1200L623.437 647.679V1200H959.062V0.00718452L959.066 0.000156824Z" fill="#0500FF"/>
<path d="M1248.75 0.000220868H1584.37V1200H1248.75V0.000220868Z" fill="#0500FF"/>
            `,
          }} height={24} viewBox="0 0 1585 1200" width={32}
          />
          <Headline>Your logo and title</Headline>
        </Grid>
      </div>

      <Embed headerHeight={headerHeight} />
    </div>
  );
}
