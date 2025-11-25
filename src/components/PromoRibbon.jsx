import React from 'react';

export const PromoRibbon = ({ 
  href = '#',
  imageSrc = 'https://via.placeholder.com/600x200?text=Promo',
  alt = 'Promotion'
}) => {
  return (
    <a href={href} style={{ textDecoration: 'none', border: 0 }}>
      <img 
        src={imageSrc} 
        width="600"
        style={{ 
          display: 'block', 
          maxWidth: '100%', 
          width: '100%', 
          height: 'auto', 
          objectFit: 'cover', 
          border: 0 
        }}
        alt={alt}
      />
    </a>
  );
};

export const PromoRibbonHTML = (href = '#', imageSrc = 'https://via.placeholder.com/600x200?text=Promo', alt = 'Promotion') => {
  return `<a href="${href}" style="text-decoration:none;border:0;"><img src="${imageSrc}" width="600" style="display:block;max-width:100%;width:100%;height:auto;object-fit:cover;border:0;" alt="${alt}"/></a>`;
};

export default PromoRibbon;
