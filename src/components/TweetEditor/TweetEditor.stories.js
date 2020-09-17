import React from 'react'

import TweetEditor from './TweetEditor';

export default {
    title: 'Example/TweetEditor',
    component: TweetEditor,
    argTypes: {
    },
};

const Template = (args) => <TweetEditor {...args} />;

export const Small = Template.bind({});
Small.args = {
};
