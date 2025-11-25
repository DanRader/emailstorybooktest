import React from 'react';
import { PromoRibbon, PromoRibbonHTML } from '../components/PromoRibbon';

export default {
  title: 'Etsy Components/PromoRibbon',
  component: PromoRibbon,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => PromoRibbonHTML(
        story.args.href,
        story.args.imageSrc,
        story.args.alt
      ),
    },
  },
};

export const Interactive = {
  args: {
    href: 'https://www.etsy.com/promo',
    imageSrc: '/images/banner.gif',
    alt: 'Promotional Banner'
  },
  argTypes: {
    href: { control: 'text' },
    imageSrc: { control: 'text' },
    alt: { control: 'text' }
  },
  render: (args) => <PromoRibbon {...args} />
};
