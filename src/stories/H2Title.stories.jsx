import React from 'react';
import { H2Title, H2TitleHTML } from '../components/H2Title';

export default {
  title: 'Modules/H2Title',
  component: H2Title,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => H2TitleHTML(
        story.args.href,
        story.args.text
      ),
    },
  },
};

export const Interactive = {
  args: {
    href: 'https://www.etsy.com/collection',
    text: 'Handpicked just for you'
  },
  argTypes: {
    href: { control: 'text' },
    text: { control: 'text' }
  },
  render: (args) => <H2Title {...args} />
};
