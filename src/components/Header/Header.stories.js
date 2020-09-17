import React from 'react'

import Header from './Header';
import { Home } from '../icons';

export default {
    title: 'Example/Header',
    component: Header,
    argTypes: {
    },
};

const Template = (args) => (
    <div>
        <Header {...args} />
    </div>
);

export const Small = Template.bind({});
Small.args = {
    title: 'Home',
    icon: <Home />
};
