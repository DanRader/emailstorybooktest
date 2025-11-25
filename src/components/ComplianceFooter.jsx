import React from 'react';

export const ComplianceFooter = ({ 
  companyName = 'Etsy, Inc.',
  address = '117 Adams Street, Brooklyn, NY 11201',
  unsubscribeHref = '#',
  unsubscribeText = 'Unsubscribe',
  copyrightYear = new Date().getFullYear()
}) => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ padding: '24px 16px 40px' }}>
      <tbody>
        <tr>
          <td>
            <p style={{ 
              margin: '0 0 8px', 
              font: '400 11px Helvetica,Arial,sans-serif', 
              lineHeight: '145%', 
              color: '#757575', 
              textAlign: 'center' 
            }}>
              {companyName}
            </p>
            <p style={{ 
              margin: '0 0 8px', 
              font: '400 11px Helvetica,Arial,sans-serif', 
              lineHeight: '145%', 
              color: '#757575', 
              textAlign: 'center' 
            }}>
              {address}
            </p>
            <p style={{ 
              margin: '0 0 8px', 
              font: '400 11px Helvetica,Arial,sans-serif', 
              lineHeight: '145%', 
              textAlign: 'center' 
            }}>
              <a href={unsubscribeHref} style={{ color: '#757575', textDecoration: 'underline' }}>
                {unsubscribeText}
              </a>
            </p>
            <p style={{ 
              margin: 0, 
              font: '400 11px Helvetica,Arial,sans-serif', 
              lineHeight: '145%', 
              color: '#757575', 
              textAlign: 'center' 
            }}>
              © {copyrightYear} {companyName}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const ComplianceFooterHTML = (companyName = 'Etsy, Inc.', address = '', unsubscribeHref = '#', unsubscribeText = 'Unsubscribe', copyrightYear = new Date().getFullYear()) => {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 16px 40px;"><tr><td><p style="margin:0 0 8px;font:400 11px Helvetica,Arial,sans-serif;line-height:145%;color:#757575;text-align:center;">${companyName}</p><p style="margin:0 0 8px;font:400 11px Helvetica,Arial,sans-serif;line-height:145%;color:#757575;text-align:center;">${address}</p><p style="margin:0 0 8px;font:400 11px Helvetica,Arial,sans-serif;line-height:145%;text-align:center;"><a href="${unsubscribeHref}" style="color:#757575;text-decoration:underline;">${unsubscribeText}</a></p><p style="margin:0;font:400 11px Helvetica,Arial,sans-serif;line-height:145%;color:#757575;text-align:center;">© ${copyrightYear} ${companyName}</p></td></tr></table>`;
};

export default ComplianceFooter;
