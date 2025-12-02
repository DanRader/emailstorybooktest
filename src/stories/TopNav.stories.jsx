import React from 'react';
import { TopNav, TopNavHTML } from '../components/TopNav';

export default {
  title: 'Modules/TopNav',
  component: TopNav,
  parameters: {
    layout: 'fullscreen',
    html: {
      transform: (code, story) => TopNavHTML(
        story.args.logoSrc,
        story.args.logoHref,
        story.args.link1Href,
        story.args.link1Text,
        story.args.link2Href,
        story.args.link2Text,
        story.args.link3Href,
        story.args.link3Text
      ),
    },
  },
};

export const Interactive = {
  args: {
    logoSrc: './images/etsy logo.gif',
    logoHref: 'https://www.etsy.com',
    link1Href: 'https://www.etsy.com/shop',
    link1Text: 'Shop',
    link2Href: 'https://www.etsy.com/sell',
    link2Text: 'Sell',
    link3Href: 'https://www.etsy.com/gifts',
    link3Text: 'Gifts'
  },
  argTypes: {
    logoSrc: { control: 'text' },
    logoHref: { control: 'text' },
    link1Href: { control: 'text' },
    link1Text: { control: 'text' },
    link2Href: { control: 'text' },
    link2Text: { control: 'text' },
    link3Href: { control: 'text' },
    link3Text: { control: 'text' }
  },
  render: (args) => <TopNav {...args} />
};
