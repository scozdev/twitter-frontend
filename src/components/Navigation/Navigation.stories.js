import React from 'react';

import Button from './Button';
import Navigation from './Navigation';
import TextTitle from '../Text/title';
import * as Icons from '../icons';

export default {
    title: 'Example/Navigation',
    component: Button,
    argTypes: {
    },
};

const TemplateButton = (args) => (
    <Button {...args}>
        <Icons.Home />
        <TextTitle>Home</TextTitle>
    </Button>
);

export const NavButton = TemplateButton.bind({});
NavButton.args = {
};
export const NavButtonSelected = TemplateButton.bind({});
NavButtonSelected.args = {
    selected: true
};
export const NavButtonNotify = TemplateButton.bind({});
NavButtonNotify.args = {
    notify: 5
};


const TemplateNav = (args) => (
    <Navigation {...args} />
);

export const Nav = TemplateNav.bind({});
Nav.args = {
};