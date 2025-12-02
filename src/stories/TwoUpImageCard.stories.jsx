import React from 'react';
import { TwoUpImageCard, TwoUpImageCardHTML } from '../components/TwoUpImageCard';

export default {
  title: 'Modules/TwoUpImageCard',
  component: TwoUpImageCard,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>${TwoUpImageCardHTML(
        story.args.href,
        story.args.imageSrc,
        story.args.itemName,
        story.args.shopName
      )}</tr></table>`,
    },
  },
};

export const Interactive = {
  args: {
    href: 'https://www.etsy.com/product',
    imageSrc: '/images/gridImage5.png',
    itemName: 'Handmade Product',
    shopName: 'Artisan Shop'
  },
  argTypes: {
    href: { control: 'text' },
    imageSrc: { control: 'text' },
    itemName: { control: 'text' },
    shopName: { control: 'text' }
  },
  render: (args) => (
    <table role="presentation" width="100%" cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <TwoUpImageCard {...args} />
        </tr>
      </tbody>
    </table>
  )
};
