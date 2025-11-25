import React from 'react';

export const LegalBlurb = ({ 
  text = 'Legal disclaimer text. Terms and conditions apply. See website for full details.'
}) => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ padding: '40px 16px 0' }}>
      <tbody>
        <tr>
          <td>
            <p style={{ 
              margin: 0, 
              font: '400 11px Helvetica,Arial,sans-serif', 
              lineHeight: '145%', 
              color: '#757575', 
              textAlign: 'center' 
            }}>
              {text}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const LegalBlurbHTML = (text = '') => {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px 0;"><tr><td><p style="margin:0;font:400 11px Helvetica,Arial,sans-serif;line-height:145%;color:#757575;text-align:center;">${text}</p></td></tr></table>`;
};

export default LegalBlurb;
