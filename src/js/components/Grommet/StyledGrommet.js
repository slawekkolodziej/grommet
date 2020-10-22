import styled, { css } from '../../styled-provider';

import { baseStyle } from '../../utils';
import { defaultProps } from '../../default-props';

const fullStyle = css`
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

const StyledGrommet = styled.div(
  props => css`
  ${!props.plain && baseStyle(props)}
  ${props.full && fullStyle}
  ${props.theme.global.font.face}
  ${props.theme.grommet.extend && props.theme.grommet.extend(props)}
  ${props.cssVars &&
    Object.keys(props.theme.global.colors)
      .filter(k => typeof props.theme.global.colors[k] === 'string')
      .map(k => `--${k}: ${props.theme.global.colors[k]};`)
      .join('\n')}
`,
);

StyledGrommet.defaultProps = {};
Object.setPrototypeOf(StyledGrommet.defaultProps, defaultProps);

export { StyledGrommet };
