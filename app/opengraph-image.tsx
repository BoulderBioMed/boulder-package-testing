import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Boulder Package Testing — Medical Device Package Validation';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B2545',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              background: '#2968A0',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              color: 'white',
            }}
          >
            BPT
          </div>
        </div>
        <div style={{ color: 'white', fontSize: '48px', fontWeight: 700, textAlign: 'center', maxWidth: '900px', lineHeight: 1.2 }}>
          Boulder Package Testing
        </div>
        <div style={{ color: '#2968A0', fontSize: '28px', fontWeight: 600, marginTop: '16px', textAlign: 'center' }}>
          Medical Device Package Validation
        </div>
        <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', marginTop: '24px', textAlign: 'center', maxWidth: '700px' }}>
          Sterile barrier and distribution testing, co-located with sterilization.
        </div>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginTop: '32px', letterSpacing: '0.15em' }}>
          ISO 11607 &middot; ASTM D4169 &middot; ASTM F1980 &middot; ISTA 3A
        </div>
      </div>
    ),
    { ...size },
  );
}
