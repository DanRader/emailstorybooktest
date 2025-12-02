import React from 'react';
import { SocialFooter, SocialFooterHTML } from '../components/SocialFooter';

export default {
  title: 'Modules/SocialFooter',
  component: SocialFooter,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => SocialFooterHTML(
        story.args.headline,
        story.args.socialLinks
      ),
    },
  },
};

export const Interactive = {
  args: {
    headline: "Let's be friends",
    socialLinks: [
      { href: 'https://facebook.com/etsy', iconSrc: '/images/social-Facebook.png', alt: 'Facebook' },
      { href: 'https://instagram.com/etsy', iconSrc: '/images/social-Instagram.png', alt: 'Instagram' },
      { href: 'https://twitter.com/etsy', iconSrc: '/images/social-Threads.png', alt: 'Twitter' },
      { href: 'https://pinterest.com/etsy', iconSrc: '/images/social-Pinterest.png', alt: 'Pinterest' },
      { href: 'https://youtube.com/etsy', iconSrc: '/images/social-tickTock.png', alt: 'TikTok' }
    ]
  },
  argTypes: {
    headline: { control: 'text' },
    socialLinks: { control: 'object' }
  },
  render: (args) => <SocialFooter {...args} />
};
