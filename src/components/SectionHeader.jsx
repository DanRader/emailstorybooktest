import React from 'react';

export const SectionHeader = ({ 
  imageSrc = 'https://via.placeholder.com/100x30?text=Badge',
  alt = 'Section Header'
}) => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ padding: '40px 16px 0' }}>
      <tbody>
        <tr>
          <td align="center">
            <img 
              src={imageSrc} 
              alt={alt}
              style={{ 
                display: 'block', 
                maxWidth: '100px', 
                height: 'auto', 
                border: 0 
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const SectionHeaderHTML = (imageSrc = 'https://via.placeholder.com/100x30?text=Badge', alt = 'Section Header') => {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px 0;"><tr><td align="center"><img src="${imageSrc}" alt="${alt}" style="display:block;max-width:100px;height:auto;border:0;"/></td></tr></table>`;
};

export default SectionHeader;
