import React from 'react';

import ThemeButton from './ThemeButton';

export default {
    title: 'Example/ThemeButton',
    component: ThemeButton,
    argTypes: {
    },
};

const Template = (args) => <ThemeButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    children: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    children: 'Button',
};

export const Full = Template.bind({});
Full.args = {
    size: 'large',
    children: 'Button',
    full: true
};

