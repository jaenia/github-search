import styled from 'styled-components';

import { colors } from '../../styles/global';

export const Name = styled.span`
  font-size: 35px;
  color: ${colors.lighterPurple};
`;

export const Description = styled.span`
  margin-top: 4px;
  font-weight: 300;
`;

export const Stars = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  color: ${colors.gray};

  img {
    width: 24px;
    margin-right: 8px;
  }
`;
