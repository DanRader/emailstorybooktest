import React from 'react';

export const H2Title = ({ 
  href = '#',
  text = 'Section Title'
}) => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ padding: '24px 16px 0' }}>
      <tbody>
        <tr>
          <td>
            <a href={href} style={{ textDecoration: 'none', color: '#332F2E' }}>
              <h2 style={{ 
                margin: 0, 
                font: '400 24px Georgia,"Times New Roman",serif', 
                lineHeight: '130%', 
                letterSpacing: '-0.72px', 
                textAlign: 'center' 
              }}>
                {text}
              </h2>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const H2TitleHTML = (href = '#', text = 'Section Title') => {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 16px 0;"><tr><td><a href="${href}" style="text-decoration:none;color:#332F2E;"><h2 style="margin:0;font:400 24px Georgia,'Times New Roman',serif;line-height:130%;letter-spacing:-0.72px;text-align:center;">${text}</h2></a></td></tr></table>`;
};

export default H2Title;
