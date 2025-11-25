import React from 'react';
import { TwoColumnProductGrid, TwoColumnProductGridHTML } from '../components/TwoColumnProductGrid';

export default {
  title: 'Etsy Components/TwoColumnProductGrid',
  component: TwoColumnProductGrid,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => TwoColumnProductGridHTML(
        story.args.items,
        story.args.ctaHref,
        story.args.ctaLabel
      ),
    },
  },
};

export const Interactive = {
  args: {
    items: [
      {
        href: 'https://www.etsy.com/product1',
        imageSrc: '/images/gridImage1.jpg',
        itemName: 'Handmade Ceramic Vase',
        shopName: 'ArtisanPottery'
      },
      {
        href: 'https://www.etsy.com/product2',
        imageSrc: '/images/gridImage2.jpg',
        itemName: 'Wooden Serving Bowl',
        shopName: 'WoodworksCo'
      }
    ],
    ctaHref: 'https://www.etsy.com/shop-all',
    ctaLabel: 'Shop all'
  },
  argTypes: {
    items: { control: 'object' },
    ctaHref: { control: 'text' },
    ctaLabel: { control: 'text' }
  },
  render: (args) => <TwoColumnProductGrid {...args} />
};
