import React from 'react';
import { ComplianceFooter, ComplianceFooterHTML } from '../components/ComplianceFooter';

export default {
  title: 'Modules/ComplianceFooter',
  component: ComplianceFooter,
  parameters: {
    layout: 'centered',
    html: {
      transform: (code, story) => ComplianceFooterHTML(
        story.args.companyName,
        story.args.address,
        story.args.unsubscribeHref,
        story.args.unsubscribeText,
        story.args.copyrightYear
      ),
    },
  },
};

export const Interactive = {
  args: {
    companyName: 'Etsy, Inc.',
    address: '117 Adams Street, Brooklyn, NY 11201',
    unsubscribeHref: 'https://www.etsy.com/unsubscribe',
    unsubscribeText: 'Unsubscribe',
    copyrightYear: new Date().getFullYear()
  },
  argTypes: {
    companyName: { control: 'text' },
    address: { control: 'text' },
    unsubscribeHref: { control: 'text' },
    unsubscribeText: { control: 'text' },
    copyrightYear: { control: 'number' }
  },
  render: (args) => <ComplianceFooter {...args} />
};
