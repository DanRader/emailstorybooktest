import React from 'react';

export const SocialFooter = ({ 
  headline = "Let's be friends",
  socialLinks = [
    { href: '#', iconSrc: 'https://via.placeholder.com/32x32?text=FB', alt: 'Facebook' },
    { href: '#', iconSrc: 'https://via.placeholder.com/32x32?text=IG', alt: 'Instagram' },
    { href: '#', iconSrc: 'https://via.placeholder.com/32x32?text=TW', alt: 'Twitter' },
    { href: '#', iconSrc: 'https://via.placeholder.com/32x32?text=PT', alt: 'Pinterest' },
    { href: '#', iconSrc: 'https://via.placeholder.com/32x32?text=YT', alt: 'YouTube' }
  ]
}) => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ padding: '40px 16px 0' }}>
      <tbody>
        <tr>
          <td align="center">
            <h3 style={{ 
              margin: '0 0 16px', 
              font: '700 18px Helvetica,Arial,sans-serif', 
              lineHeight: '130%', 
              color: '#332F2E' 
            }}>
              {headline}
            </h3>
          </td>
        </tr>
        <tr>
          <td align="center">
            <table role="presentation" cellPadding="0" cellSpacing="0" style={{ display: 'inline-block' }}>
              <tbody>
                <tr>
                  {socialLinks.map((link, index) => (
                    <td key={index} style={{ padding: '0 8px' }}>
                      <a href={link.href} style={{ textDecoration: 'none', border: 0 }}>
                        <img 
                          src={link.iconSrc} 
                          width="32" 
                          height="32"
                          alt={link.alt}
                          style={{ 
                            display: 'block', 
                            border: 0 
                          }}
                        />
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const SocialFooterHTML = (headline = "Let's be friends", socialLinks = []) => {
  const iconsHTML = socialLinks.map(link => 
    `<td style="padding:0 8px;"><a href="${link.href}" style="text-decoration:none;border:0;"><img src="${link.iconSrc}" width="32" height="32" alt="${link.alt}" style="display:block;border:0;"/></a></td>`
  ).join('');
  
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px 0;"><tr><td align="center"><h3 style="margin:0 0 16px;font:700 18px Helvetica,Arial,sans-serif;line-height:130%;color:#332F2E;">${headline}</h3></td></tr><tr><td align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="display:inline-block;"><tr>${iconsHTML}</tr></table></td></tr></table>`;
};

export default SocialFooter;
