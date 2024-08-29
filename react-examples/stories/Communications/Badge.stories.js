import React from 'react';
import TwixtBadge from '../../../react/src/Communications/Badge';

export default {
  title: 'Communications/TwixtBadge',
  component: TwixtBadge,
  argTypes: {
    value: { control: 'text' },
    status: { 
      control: 'select', 
      options: ['Default', 'Active', 'Success', 'Error', 'Warning', 'Yellow', 'Magenta', 'Purple', 'Teal', 'Cyan'],
    },
    overwriteClass: { control: 'text' },
  },
};

const Template = (args) => <TwixtBadge {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Default Label',
  status: 'Default',
};

export const Active = Template.bind({});
Active.args = {
  value: 'Active',
  status: 'Active',
};

export const Success = Template.bind({});
Success.args = {
  value: 'Success',
  status: 'Success',
};

export const Error = Template.bind({});
Error.args = {
  value: 'Error',
  status: 'Error',
};

export const Warning = Template.bind({});
Warning.args = {
  value: 'Warning',
  status: 'Warning',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  value: 'Custom',
  status: 'Warning',
  overwriteClass: 'inline-block px-4 py-2 bg-purple-700 text-white font-bold rounded-full shadow-lg',
};
