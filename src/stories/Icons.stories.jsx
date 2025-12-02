import React from 'react';

export default {
  title: 'Foundations & Components/Icons',
  parameters: {
    layout: 'padded',
  },
};

const IconCard = ({ name, src, size, usage }) => (
  <div style={{ 
    padding: '20px',
    border: '1px solid #E8E8E8',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '16px'
  }}>
    <div style={{ 
      minHeight: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '12px'
    }}>
      <img src={src} alt={name} width={size} height={size} style={{ display: 'block' }} />
    </div>
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '4px' }}>{name}</div>
      <div style={{ fontSize: '12px', color: '#757575', marginBottom: '4px' }}>{size}x{size}px</div>
      <div style={{ fontSize: '11px', color: '#999' }}>{usage}</div>
    </div>
  </div>
);

export const EmailIcons = () => (
  <div style={{ maxWidth: '900px', padding: '20px' }}>
    <h1 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '16px' }}>Email Icons</h1>
    <p style={{ fontFamily: 'Helvetica, Arial, sans-serif', color: '#757575', marginBottom: '32px' }}>
      Icon library used in email templates for navigation, social media, and app badges.
    </p>
    
    <h2 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '16px' }}>Social Media Icons</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px', marginBottom: '40px' }}>
      <IconCard name="Facebook" src="/images/facebook.png" size="24" usage="Social footer" />
      <IconCard name="Instagram" src="/images/instagram.png" size="24" usage="Social footer" />
      <IconCard name="Pinterest" src="/images/pinterest.png" size="24" usage="Social footer" />
      <IconCard name="Twitter" src="/images/twitter.png" size="24" usage="Social footer" />
      <IconCard name="YouTube" src="/images/youtube.png" size="24" usage="Social footer" />
    </div>

    <h2 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '16px' }}>App Store Badges</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginBottom: '40px' }}>
      <IconCard name="Apple App Store" src="/images/appleAppStore.png" size="120" usage="App download" />
      <IconCard name="Google Play" src="/images/googlePlay.png" size="135" usage="App download" />
    </div>

    <h2 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '16px' }}>Product & Category Icons</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
      <IconCard name="Expert Badge 1" src="/images/expert1.png" size="64" usage="Expert profiles" />
      <IconCard name="Expert Badge 2" src="/images/expert2.png" size="64" usage="Expert profiles" />
      <IconCard name="Expert Badge 3" src="/images/expert3.png" size="64" usage="Expert profiles" />
    </div>

    <h2 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginTop: '48px', marginBottom: '16px' }}>Icon Guidelines</h2>
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
        <li style={{ marginBottom: '8px' }}>Always include alt text for accessibility</li>
        <li style={{ marginBottom: '8px' }}>Use standard sizes: 24px (social), 64px (badges), 120-135px (app stores)</li>
        <li style={{ marginBottom: '8px' }}>Ensure sufficient padding around clickable icons (min 44x44px touch target)</li>
        <li style={{ marginBottom: '8px' }}>Icons should be hosted reliably and load quickly</li>
        <li>Provide fallback text or border for email clients that block images</li>
      </ul>
    </div>
  </div>
);
