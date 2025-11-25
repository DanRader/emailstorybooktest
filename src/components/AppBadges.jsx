import React from 'react';

export const AppBadges = ({ 
  appStoreHref = '#',
  appStoreSrc = 'https://via.placeholder.com/135x40?text=App+Store',
  googlePlayHref = '#',
  googlePlaySrc = 'https://via.placeholder.com/135x40?text=Google+Play'
}) => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ padding: '24px 16px 0' }}>
      <tbody>
        <tr>
          <td align="center">
            <table role="presentation" cellPadding="0" cellSpacing="0" style={{ display: 'inline-block' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '0 6px' }}>
                    <a href={appStoreHref} style={{ textDecoration: 'none', border: 0 }}>
                      <img 
                        src={appStoreSrc} 
                        width="135" 
                        height="40"
                        alt="Download on the App Store"
                        style={{ 
                          display: 'block', 
                          border: 0 
                        }}
                      />
                    </a>
                  </td>
                  <td style={{ padding: '0 6px' }}>
                    <a href={googlePlayHref} style={{ textDecoration: 'none', border: 0 }}>
                      <img 
                        src={googlePlaySrc} 
                        width="135" 
                        height="40"
                        alt="Get it on Google Play"
                        style={{ 
                          display: 'block', 
                          border: 0 
                        }}
                      />
                    </a>
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

export const AppBadgesHTML = (appStoreHref = '#', appStoreSrc = '', googlePlayHref = '#', googlePlaySrc = '') => {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 16px 0;"><tr><td align="center"><table role="presentation" cellpadding="0" cellspacing="0" style="display:inline-block;"><tr><td style="padding:0 6px;"><a href="${appStoreHref}" style="text-decoration:none;border:0;"><img src="${appStoreSrc}" width="135" height="40" alt="Download on the App Store" style="display:block;border:0;"/></a></td><td style="padding:0 6px;"><a href="${googlePlayHref}" style="text-decoration:none;border:0;"><img src="${googlePlaySrc}" width="135" height="40" alt="Get it on Google Play" style="display:block;border:0;"/></a></td></tr></table></td></tr></table>`;
};

export default AppBadges;
