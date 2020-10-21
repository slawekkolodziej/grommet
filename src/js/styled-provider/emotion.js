import React from 'react';
import { css, keyframes, ThemeContext, Global } from '@emotion/core';
import styled from '@emotion/styled';

export default styled;

function createGlobalStyle(globalStyles) {
  return () => <Global styles={globalStyles} />;
}

export { css, keyframes, createGlobalStyle, ThemeContext };
