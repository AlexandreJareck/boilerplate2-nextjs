import React from 'react';
import GlobalStyles from 'styles/global'

export const decorators = [
  (Story) => (
    <>
        <Story />
        <GlobalStyles />
    </>
  ),
];
