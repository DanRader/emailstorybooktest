import React from 'react';

const variantStyles = {
  primary: {
    background: '#332F2E',
    border: '2px solid #332F2E',
    color: '#FAF8F5'
  },
  secondary: {
    background: '#FAF8F5',
    border: '2px solid #332F2E',
    color: '#332F2E'
  }
};

export const EtsyCTA = ({ 
  href = '#', 
  children = 'Button', 
  variant = 'primary'
}) => {
  const styles = variantStyles[variant] || variantStyles.primary;
  
  return (
    <a 
      href={href}
      style={{
        display: 'inline-block',
        padding: '10.5px 32px',
        borderRadius: '24px',
        background: styles.background,
        border: styles.border,
        color: styles.color,
        font: '700 18px Helvetica,Arial,sans-serif',
        lineHeight: '130%',
        textDecoration: 'none'
      }}
    >
      {children}
    </a>
  );
};

export const EtsyCTAHTML = (label = 'Button', href = '#', variant = 'primary') => {
  const styles = variantStyles[variant] || variantStyles.primary;
  
  return `<a href="${href}" style="display:inline-block;padding:10.5px 32px;border-radius:24px;background:${styles.background};border:${styles.border};color:${styles.color};font:700 18px Helvetica,Arial,sans-serif;line-height:130%;text-decoration:none;">${label}</a>`;
};

export default EtsyCTA;
