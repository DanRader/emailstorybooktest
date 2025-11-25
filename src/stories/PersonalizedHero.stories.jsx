import React from 'react';
import { PersonalizedHero, PersonalizedHeroHTML } from '../components/PersonalizedHero';

export default {
  title: 'Etsy Components/PersonalizedHero',
  component: PersonalizedHero,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => PersonalizedHeroHTML(
        story.args.imageHref,
        story.args.imageSrc,
        story.args.headlineHref,
        story.args.headline,
        story.args.copyHref,
        story.args.copy,
        story.args.ctaHref,
        story.args.ctaLabel
      ),
    },
  },
};

export const Interactive = {
  args: {
    imageHref: 'https://www.etsy.com/invitations',
    imageSrc: '/images/headline image.jpg',
    headlineHref: 'https://www.etsy.com/invitations',
    headline: 'Next up for you: Invitations',
    copyHref: 'https://www.etsy.com/personalized',
    copy: 'Discover your personalized roundup of Etsy finds, here to brighten your day.',
    ctaHref: 'https://www.etsy.com/shop-now',
    ctaLabel: 'Shop now'
  },
  argTypes: {
    imageHref: { control: 'text' },
    imageSrc: { control: 'text' },
    headlineHref: { control: 'text' },
    headline: { control: 'text' },
    copyHref: { control: 'text' },
    copy: { control: 'text' },
    ctaHref: { control: 'text' },
    ctaLabel: { control: 'text' }
  },
  render: (args) => <PersonalizedHero {...args} />
};
