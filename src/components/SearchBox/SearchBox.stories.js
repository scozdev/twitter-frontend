import React from 'react'

import SearchBox from './SearchBox';

export default {
    title: 'Example/SearchBox',
    component: SearchBox,
    argTypes: {
    },
};

const Template = () => <SearchBox />;

export const Normal = Template.bind({});
Normal.args = {
};
