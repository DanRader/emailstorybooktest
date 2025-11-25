import React from 'react';
import { EtsyCTA, EtsyCTAHTML } from '../components/EtsyCTA';

export default {
  title: 'Etsy Components/EtsyCTA',
  component: EtsyCTA,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => EtsyCTAHTML(
        story.args.children,
        story.args.href,
        story.args.variant
      ),
    },
  },
};

export const Interactive = {
  args: {
    children: 'Shop now',
    href: 'https://www.etsy.com',
    variant: 'primary'
  },
  argTypes: {
    children: { control: 'text' },
    href: { control: 'text' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary']
    }
  },
  render: (args) => <EtsyCTA {...args} />
};

export const Primary = {
  args: {
    children: 'Primary Button',
    href: '#',
    variant: 'primary'
  },
  render: (args) => <EtsyCTA {...args} />
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
    href: '#',
    variant: 'secondary'
  },
  render: (args) => <EtsyCTA {...args} />
};
