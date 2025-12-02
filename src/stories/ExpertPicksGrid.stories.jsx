import React from 'react';
import { ExpertPicksGrid, ExpertPicksGridHTML } from '../components/ExpertPicksGrid';

export default {
  title: 'Modules/ExpertPicksGrid',
  component: ExpertPicksGrid,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => ExpertPicksGridHTML(
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
        imageSrc: '/images/gridImage5.png',
        itemName: 'Vintage Art Print',
        shopName: 'RetroGallery'
      },
      {
        href: 'https://www.etsy.com/product2',
        imageSrc: '/images/gridImage6.png',
        itemName: 'Leather Messenger Bag',
        shopName: 'CraftedLeather'
      }
    ],
    ctaHref: 'https://www.etsy.com/collection',
    ctaLabel: 'Shop the collection'
  },
  argTypes: {
    items: { control: 'object' },
    ctaHref: { control: 'text' },
    ctaLabel: { control: 'text' }
  },
  render: (args) => <ExpertPicksGrid {...args} />
};
