import React from 'react'

import TextBody from './body';
import TextTitle from './title';

export default {
    title: 'Example/Text',
    argTypes: {
    },
};

export const TextBodyNormal = () => <TextBody >TextBodyNormal</TextBody>;
export const TextBodyBold = () => <TextBody bold>TextBodyBold</TextBody>;
export const TextTitleNormal = () => <TextTitle bold={false}>TextTitleBold</TextTitle>;
export const TextTitleBold = () => <TextTitle>TextTitleBold</TextTitle>;

