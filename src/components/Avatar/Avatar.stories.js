import React from 'react'

import Avatar from './Avatar';

export default {
    title: 'Example/Avatar',
    component: Avatar,
    argTypes: {
    },
};

const Template = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
    size: 'small'
};
export const Medium = Template.bind({});
Medium.args = {
    size: 'medium'
};
export const Large = Template.bind({});
Large.args = {
    size: 'large'
};