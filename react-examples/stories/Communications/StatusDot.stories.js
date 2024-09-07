import React from 'react';
import StatusDot from '../../../react/src/Communications/StatusDot';
export default {
  title: 'Communications/TwixtStatusDot',
  component: StatusDot,
  argTypes: {
    status: { 
        options: ['Active', 'DoNotDisturb', 'InMeeting', 'Away'],
    },
    overwriteClass: '',
  },
};

const Template = (args) => <StatusDot {...args}/>;

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = {
  status: 'Active'
};

export const Success = Template.bind({});
Success.args = {
  status: 'Success'
};

export const Error = Template.bind({});
Error.args = {
  status: 'Error'
};

export const Warning = Template.bind({});
Warning.args = {
  status: 'Warning'
};
