import React from 'react';

export const ExpertProfile = ({ 
  avatarSrc = 'https://via.placeholder.com/56x56?text=Avatar',
  name = 'Expert Name',
  title = 'Editor',
  quote = 'This is an expert quote about the products or collection.'
}) => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ padding: '24px 16px 0' }}>
      <tbody>
        <tr>
          <td>
            <table role="presentation" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td style={{ paddingRight: '16px', verticalAlign: 'middle' }}>
                    <img 
                      src={avatarSrc} 
                      width="56" 
                      height="56"
                      alt={name}
                      style={{ 
                        display: 'block', 
                        borderRadius: '50%', 
                        border: 0 
                      }}
                    />
                  </td>
                  <td style={{ verticalAlign: 'middle' }}>
                    <div style={{ 
                      margin: 0, 
                      font: '700 14px Helvetica,Arial,sans-serif', 
                      lineHeight: '130%', 
                      color: '#332F2E' 
                    }}>
                      {name}
                    </div>
                    <div style={{ 
                      margin: '4px 0 0', 
                      font: '400 12px Helvetica,Arial,sans-serif', 
                      lineHeight: '130%', 
                      color: '#757575' 
                    }}>
                      {title}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{ paddingTop: '16px' }}>
            <p style={{ 
              margin: 0, 
              font: '400 18px Georgia,"Times New Roman",serif', 
              lineHeight: '145%', 
              color: '#332F2E', 
              fontStyle: 'italic' 
            }}>
              "{quote}"
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const ExpertProfileHTML = (avatarSrc = '', name = 'Expert Name', title = 'Editor', quote = '') => {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 16px 0;"><tr><td><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="padding-right:16px;vertical-align:middle;"><img src="${avatarSrc}" width="56" height="56" alt="${name}" style="display:block;border-radius:50%;border:0;"/></td><td style="vertical-align:middle;"><div style="margin:0;font:700 14px Helvetica,Arial,sans-serif;line-height:130%;color:#332F2E;">${name}</div><div style="margin:4px 0 0;font:400 12px Helvetica,Arial,sans-serif;line-height:130%;color:#757575;">${title}</div></td></tr></table></td></tr><tr><td style="padding-top:16px;"><p style="margin:0;font:400 18px Georgia,'Times New Roman',serif;line-height:145%;color:#332F2E;font-style:italic;">"${quote}"</p></td></tr></table>`;
};

export default ExpertProfile;
