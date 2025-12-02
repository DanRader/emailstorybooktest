import React from 'react';
import { LegalBlurb, LegalBlurbHTML } from '../components/LegalBlurb';

export default {
  title: 'Modules/LegalBlurb',
  component: LegalBlurb,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => LegalBlurbHTML(
        story.args.text
      ),
    },
  },
};

export const Interactive = {
  args: {
    text: 'Offer valid while supplies last. Terms and conditions apply. See website for full details.'
  },
  argTypes: {
    text: { control: 'text' }
  },
  render: (args) => <LegalBlurb {...args} />
};
