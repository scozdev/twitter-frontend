import React from 'react'
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

import '../src/styles/index.css';
import './style.css';