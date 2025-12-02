import React from 'react';

export default {
  title: 'Foundations & Components/Illustrations',
  parameters: {
    layout: 'padded',
  },
};

const IllustrationCard = ({ name, src, description }) => (
  <div style={{ marginBottom: '32px', maxWidth: '400px' }}>
    <div style={{ 
      border: '1px solid #E8E8E8',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#FAF8F5',
      marginBottom: '12px',
      textAlign: 'center'
    }}>
      <img src={src} alt={name} style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
    </div>
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{name}</div>
      <div style={{ fontSize: '14px', color: '#757575' }}>{description}</div>
    </div>
  </div>
);

export const EmailIllustrations = () => (
  <div style={{ maxWidth: '800px', padding: '20px' }}>
    <h1 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '16px' }}>Email Illustrations</h1>
    <p style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: '#757575', marginBottom: '32px' }}>
      Decorative illustrations and graphics used throughout email campaigns.
    </p>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
      <IllustrationCard 
        name="Banner Shape"
        src="./images/bannerImage.png"
        description="Promotional banner accent graphic"
      />
      <IllustrationCard 
        name="Hero Background"
        src="./images/heroImage.png"
        description="Main hero section background"
      />
      <IllustrationCard 
        name="Shape Accent"
        src="./images/shapeImage.png"
        description="Generic shape for visual interest"
      />
    </div>

    <h2 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginTop: '48px', marginBottom: '16px' }}>Usage Guidelines</h2>
    <div style={{ 
      fontFamily: 'Helvetica, Arial, sans-serif', 
      fontSize: '14px', 
      lineHeight: '160%',
      color: '#332F2E',
      padding: '16px',
      backgroundColor: '#FAF8F5',
      borderRadius: '8px',
      borderLeft: '4px solid #F1641E'
    }}>
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        <li style={{ marginBottom: '8px' }}>Use illustrations to enhance messaging, not replace it</li>
        <li style={{ marginBottom: '8px' }}>Ensure illustrations have sufficient contrast with backgrounds</li>
        <li style={{ marginBottom: '8px' }}>Keep file sizes optimized for email delivery</li>
        <li>Provide alt text for accessibility</li>
      </ul>
    </div>
  </div>
);
