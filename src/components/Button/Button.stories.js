import React from 'react'

import Button from './Button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
    },
};

const Template = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: 'Normal',
};
export const Full = Template.bind({});
Full.args = {
    children: 'Full',
    full: true
};
export const IconButton = Template.bind({});
IconButton.args = {
    children: 'Full',
    icon: true
};
