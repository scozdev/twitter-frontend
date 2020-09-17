import React from 'react'
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import { More } from '../icons';

import List from './';

export default {
    title: 'Example/List',
};

const Template = (args) => (
    <div style={{ width: "350px" }}>
        <List
            title={`Talvez você curta`}
            icon={<More />}
            elements={[
                <FollowSuggestion
                    name="Luiz Batanero"
                    nickname="@luizbatanero"
                />,
                <FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
                <FollowSuggestion
                    name="Camila Magalhães"
                    nickname="@camilaamgl"
                />,
            ]}
        />
    </div>
);

export const FollowList = Template.bind({});
FollowList.args = {
};


const Template2 = (args) => (
    <div style={{ width: "350px" }}>
        <List
            title="O que está acontecendo"
            elements={[
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
                <News />,
            ]}
        />
    </div>
);

export const TrendingList = Template2.bind({});
TrendingList.args = {
};
