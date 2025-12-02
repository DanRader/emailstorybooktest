import React from 'react';
import { ExpertProfile, ExpertProfileHTML } from '../components/ExpertProfile';

export default {
  title: 'Modules/ExpertProfile',
  component: ExpertProfile,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => ExpertProfileHTML(
        story.args.avatarSrc,
        story.args.name,
        story.args.title,
        story.args.quote
      ),
    },
  },
};

export const Interactive = {
  args: {
    avatarSrc: '/images/avatar.png',
    name: 'Sarah Johnson',
    title: 'Senior Editor',
    quote: 'These handpicked items represent the best of what Etsy has to offer this season. Each piece tells a unique story.'
  },
  argTypes: {
    avatarSrc: { control: 'text' },
    name: { control: 'text' },
    title: { control: 'text' },
    quote: { control: 'text' }
  },
  render: (args) => <ExpertProfile {...args} />
};
