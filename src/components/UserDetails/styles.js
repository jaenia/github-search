import styled from 'styled-components';

import { colors } from '../../styles/global';

export const StyledList = styled.ul`
  list-style: none;
  color: ${colors.gray};
  font-weight: 300;

  li {
    display: flex;
    align-items: center;

    & + li {
      margin-top: 14px;
    }

    img {
      width: 24px;
      margin-right: 7px;
    }
  }
`;
