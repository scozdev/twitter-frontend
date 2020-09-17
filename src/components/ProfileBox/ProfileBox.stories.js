import React from 'react';

import ProfileBox from './ProfileBox';


export default {
    title: 'Example/ProfileBox',
    component: ProfileBox,
    argTypes: {
    },
};

const Template = (args) => (
    <div style={{ width: "250px" }}>
        <ProfileBox {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
};
