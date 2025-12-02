import React from 'react';
import { SectionHeader, SectionHeaderHTML } from '../components/SectionHeader';

export default {
  title: 'Modules/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => SectionHeaderHTML(
        story.args.imageSrc,
        story.args.alt
      ),
    },
  },
};

export const Interactive = {
  args: {
    imageSrc: '/images/shapeImage.png',
    alt: 'Section Header'
  },
  argTypes: {
    imageSrc: { control: 'text' },
    alt: { control: 'text' }
  },
  render: (args) => <SectionHeader {...args} />
};
