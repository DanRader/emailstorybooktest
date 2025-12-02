import React from 'react';
import { EtsyCTA, EtsyCTAHTML } from '../components/EtsyCTA';

const meta = {
  title: 'Foundations & Components/Button',
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

export default meta;

export const Default = {};
