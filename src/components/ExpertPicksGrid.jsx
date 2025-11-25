import React from 'react';
import TwoUpImageCard from './TwoUpImageCard';
import EtsyCTA from './EtsyCTA';

export const ExpertPicksGrid = ({ 
  items = [
    {
      href: '#',
      imageSrc: 'https://via.placeholder.com/267x267?text=Pick+1',
      itemName: 'Expert Pick 1',
      shopName: 'Shop Name'
    },
    {
      href: '#',
      imageSrc: 'https://via.placeholder.com/267x267?text=Pick+2',
      itemName: 'Expert Pick 2',
      shopName: 'Shop Name'
    }
  ],
  ctaHref = '#',
  ctaLabel = 'Shop the collection'
}) => {
  return (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0" style={{ padding: '24px 16px 0' }}>
      <tbody>
        <tr>
          {items.slice(0, 2).map((item, index) => (
            <TwoUpImageCard 
              key={index}
              href={item.href}
              imageSrc={item.imageSrc}
              itemName={item.itemName}
              shopName={item.shopName}
            />
          ))}
        </tr>
        <tr>
          <td colSpan="2" style={{ paddingTop: '24px' }}>
            <EtsyCTA href={ctaHref} variant="secondary">{ctaLabel}</EtsyCTA>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const ExpertPicksGridHTML = (items = [], ctaHref = '#', ctaLabel = 'Shop the collection') => {
  const itemsHTML = items.slice(0, 2).map(item => 
    `<td width="50%" valign="top" style="padding:6px;"><a href="${item.href}" style="text-decoration:none;border:0;"><img src="${item.imageSrc}" width="267" alt="${item.itemName}" style="display:block;width:100%;max-width:267px;height:auto;border-radius:8px;object-fit:cover;border:0;"/></a><a href="${item.href}" style="text-decoration:none;color:#332F2E;"><div style="margin-top:8px;font:700 14px Helvetica,Arial,sans-serif;line-height:130%;">${item.itemName}</div></a><a href="${item.href}" style="text-decoration:none;color:#757575;"><div style="margin-top:4px;font:400 12px Helvetica,Arial,sans-serif;line-height:130%;">${item.shopName}</div></a></td>`
  ).join('');
  
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 16px 0;"><tr>${itemsHTML}</tr><tr><td colspan="2" style="padding-top:24px;"><a href="${ctaHref}" style="display:inline-block;padding:10.5px 32px;border-radius:24px;background:#FAF8F5;border:2px solid #332F2E;color:#332F2E;font:700 18px Helvetica,Arial,sans-serif;line-height:130%;text-decoration:none;">${ctaLabel}</a></td></tr></table>`;
};

export default ExpertPicksGrid;
