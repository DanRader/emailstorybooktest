import React from 'react';

export const TopNav = ({ 
  logoHref = '#',
  logoSrc = 'https://via.placeholder.com/50x20?text=Logo',
  logoAlt = 'Logo',
  links = [
    { text: 'Link 1', href: '#' },
    { text: 'Link 2', href: '#' },
    { text: 'Link 3', href: '#' }
  ]
}) => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td style={{ padding: '0 16px 24px' }}>
            <table role="presentation" width="100%">
              <tbody>
                <tr>
                  <td align="left" style={{ width: '98px' }}>
                    <a href={logoHref} style={{ textDecoration: 'none', border: 0 }}>
                      <img 
                        src={logoSrc} 
                        width="50" 
                        style={{ display: 'block', width: '50px', height: 'auto', border: 0 }} 
                        alt={logoAlt}
                      />
                    </a>
                  </td>
                  <td align="right" style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                    {links.map((link, index) => (
                      <a 
                        key={index}
                        href={link.href} 
                        style={{ 
                          font: '14px Helvetica,Arial,sans-serif', 
                          color: '#332F2E', 
                          textDecoration: 'none', 
                          paddingRight: index < links.length - 1 ? '24px' : '0' 
                        }}
                      >
                        {link.text}
                      </a>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const TopNavHTML = (logoHref = '#', logoSrc = 'https://via.placeholder.com/50x20?text=Logo', logoAlt = 'Logo', links = []) => {
  const linksHTML = links.map((link, i) => 
    `<a href="${link.href}" style="font:14px Helvetica,Arial,sans-serif;color:#332F2E;text-decoration:none;${i < links.length - 1 ? 'padding-right:24px;' : ''}">${link.text}</a>`
  ).join('');
  
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:0 16px 24px;"><table role="presentation" width="100%"><tr><td align="left" style="width:98px;"><a href="${logoHref}" style="text-decoration:none;border:0;"><img src="${logoSrc}" width="50" style="display:block;width:50px;height:auto;border:0;" alt="${logoAlt}"/></a></td><td align="right" style="text-align:right;white-space:nowrap;">${linksHTML}</td></tr></table></td></tr></table>`;
};

export default TopNav;
