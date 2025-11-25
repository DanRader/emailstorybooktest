import React from 'react';

export const TwoUpImageCard = ({ 
  href = '#', 
  imageSrc = 'https://via.placeholder.com/256',
  alt = ''
}) => {
  return (
    <td valign="top" style={{ width: '50%', padding: '0 6px 12px' }}>
      <a href={href} style={{ textDecoration: 'none', border: 0, display: 'block' }}>
        <img 
          src={imageSrc} 
          width="256" 
          alt={alt}
          style={{ 
            display: 'block', 
            width: '100%', 
            height: 'auto', 
            borderRadius: '8px', 
            objectFit: 'cover', 
            border: 0 
          }}
        />
      </a>
    </td>
  );
};

export const TwoUpImageCardHTML = (href = '#', imageSrc = 'https://via.placeholder.com/256', alt = '') => {
  return `<td valign="top" style="width:50%;padding:0 6px 12px;"><a href="${href}" style="text-decoration:none;border:0;display:block;"><img src="${imageSrc}" width="256" alt="${alt}" style="display:block;width:100%;height:auto;border-radius:8px;object-fit:cover;border:0;"/></a></td>`;
};

export default TwoUpImageCard;
