import styled from 'styled-components';

import { colors } from '../../styles/global';

export const Title = styled.h1`
  font-size: ${(props) => props.size};
  font-weight: 200;
  font-style: italic;

  a {
    text-decoration: none;
    color: ${colors.black};
  }

  span {
    font-family: 'Oxygen Mono';
    font-style: normal;
  }

  @media screen and (max-width: 500px) {
    font-size: 11vw;
  }
`;
