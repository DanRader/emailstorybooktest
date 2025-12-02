import React from 'react';

export default {
  title: 'Foundations & Components/Color',
  parameters: {
    layout: 'padded',
  },
};

const ColorSwatch = ({ name, hex, usage }) => (
  <div style={{ marginBottom: '24px' }}>
    <div style={{ 
      width: '100%', 
      height: '80px', 
      backgroundColor: hex,
      borderRadius: '8px',
      marginBottom: '8px',
      border: hex === '#FFFFFF' || hex === '#FAF8F5' ? '1px solid #e0e0e0' : 'none'
    }} />
    <div style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{name}</div>
      <div style={{ fontSize: '14px', color: '#757575', marginBottom: '4px' }}>{hex}</div>
      <div style={{ fontSize: '12px', color: '#999' }}>{usage}</div>
    </div>
  </div>
);

export const EmailColors = () => (
  <div style={{ maxWidth: '800px', padding: '20px' }}>
    <h1 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '32px' }}>Email Color Palette</h1>
    
    <h2 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '16px', marginTop: '32px' }}>Primary Colors</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' }}>
      <ColorSwatch name="Black" hex="#332F2E" usage="Primary text, CTA borders, headers" />
      <ColorSwatch name="Orange" hex="#F1641E" usage="Primary brand color, accents" />
      <ColorSwatch name="White" hex="#FFFFFF" usage="Background, button text" />
    </div>

    <h2 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '16px', marginTop: '32px' }}>Secondary Colors</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' }}>
      <ColorSwatch name="Cream" hex="#FAF8F5" usage="Secondary button background" />
      <ColorSwatch name="Medium Gray" hex="#757575" usage="Secondary text, shop names" />
      <ColorSwatch name="Light Gray" hex="#E8E8E8" usage="Dividers, borders" />
    </div>

    <h2 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '16px', marginTop: '32px' }}>Accent Colors</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' }}>
      <ColorSwatch name="Blue" hex="#005CAB" usage="Links, informational elements" />
      <ColorSwatch name="Pink" hex="#FFD4E4" usage="Promotional backgrounds" />
    </div>
  </div>
);
