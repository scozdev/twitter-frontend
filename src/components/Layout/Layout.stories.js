import React from 'react'

import Layout from './index';
import Sidebar from './Sidebar';
import TimeLine from './TimeLine';
import Extra from './Extra';

export default {
    title: 'Example/Layout',
    argTypes: {
    },
};

const Template = (args) => <Layout>asd</Layout>;

export const Normal = Template.bind({});
Normal.args = {
};


const TemplateSidebar = (args) => (
    <div style={{ width: "270px" }}>
        <Sidebar>asd</Sidebar>
    </div>
);
export const LayoutSidebar = TemplateSidebar.bind({});
LayoutSidebar.args = {
};


const TemplateTimeLine = (args) => (
    <div style={{ width: "270px" }}>
        <TimeLine>asd</TimeLine>
    </div>
);
export const LayoutTimeLine = TemplateTimeLine.bind({});
LayoutTimeLine.args = {
};


const TemplateExtra = (args) => (
    <div style={{ width: "270px" }}>
        <Extra>asd</Extra>
    </div>
);
export const LayoutExtra = TemplateExtra.bind({});
LayoutExtra.args = {
};

