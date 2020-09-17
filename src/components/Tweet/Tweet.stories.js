import React from 'react'

import Tweet from './Tweet';

export default {
    title: 'Example/Tweet',
    component: Tweet,
    argTypes: {
    },
};

const Template = (args) => <Tweet {...args} />;

export const Small = Template.bind({});
Small.args = {
};
