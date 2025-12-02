import React from 'react';

export default {
  title: 'Foundations & Components/Typography',
  parameters: {
    layout: 'padded',
  },
};

const TypeSample = ({ label, style, text = 'The quick brown fox jumps over the lazy dog' }) => (
  <div style={{ marginBottom: '32px', borderBottom: '1px solid #E8E8E8', paddingBottom: '24px' }}>
    <div style={{ fontSize: '12px', color: '#757575', marginBottom: '8px', fontFamily: 'Helvetica, Arial, sans-serif' }}>
      {label}
    </div>
    <div style={style}>{text}</div>
    <div style={{ fontSize: '11px', color: '#999', marginTop: '8px', fontFamily: 'monospace' }}>
      {Object.entries(style).map(([key, value]) => `${key}: ${value}`).join(' | ')}
    </div>
  </div>
);

export const EmailTypography = () => (
  <div style={{ maxWidth: '800px', padding: '20px' }}>
    <h1 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '32px' }}>Email Typography</h1>
    
    <h2 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '24px' }}>Headings</h2>
    
    <TypeSample 
      label="H1 - Main Headlines"
      style={{
        fontFamily: 'Georgia, Times, serif',
        fontSize: '28px',
        fontWeight: '400',
        lineHeight: '130%',
        color: '#332F2E'
      }}
      text="Main Email Headline"
    />
    
    <TypeSample 
      label="H2 - Section Headers"
      style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '130%',
        color: '#332F2E'
      }}
      text="Section Header"
    />
    
    <TypeSample 
      label="H3 - Module Titles"
      style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '130%',
        color: '#332F2E'
      }}
      text="Module Title"
    />

    <h2 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '24px', marginTop: '40px' }}>Body Text</h2>
    
    <TypeSample 
      label="Body - Regular"
      style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '150%',
        color: '#332F2E'
      }}
      text="This is regular body text used for descriptions and general content throughout the email."
    />
    
    <TypeSample 
      label="Body - Bold"
      style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '150%',
        color: '#332F2E'
      }}
      text="This is bold body text used for emphasis and product names."
    />

    <h2 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '24px', marginTop: '40px' }}>UI Elements</h2>
    
    <TypeSample 
      label="Button Text"
      style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '130%',
        color: '#332F2E'
      }}
      text="Shop now"
    />
    
    <TypeSample 
      label="Product Name"
      style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '130%',
        color: '#332F2E'
      }}
      text="Handmade Ceramic Mug"
    />
    
    <TypeSample 
      label="Shop Name / Meta"
      style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '130%',
        color: '#757575'
      }}
      text="ArtisanWorks Studio"
    />

    <h2 style={{ fontFamily: 'Helvetica, Arial, sans-serif', marginBottom: '24px', marginTop: '40px' }}>Legal & Footer</h2>
    
    <TypeSample 
      label="Legal Text"
      style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '11px',
        fontWeight: '400',
        lineHeight: '140%',
        color: '#757575'
      }}
      text="*Offer valid for a limited time. Terms and conditions apply."
    />
    
    <TypeSample 
      label="Footer Links"
      style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '130%',
        color: '#005CAB',
        textDecoration: 'none'
      }}
      text="Unsubscribe | Privacy Policy"
    />
  </div>
);
