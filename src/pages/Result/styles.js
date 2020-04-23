import styled from 'styled-components';

import { colors } from '../../styles/global';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 1.5em;

  main {
    display: flex;
    margin-top: 50px;
  }

  @media screen and (max-width: 768px) {
    main {
      flex-direction: column;
    }

    section:last-child {
      margin-top: 32px;
    }
  }
`;

export const UserNotFound = styled.span`
  display: block;
  padding-top: 124px;
  width: 100%;
  text-align: center;
  font-size: 40px;
  color: ${colors.lighterPurple};

  @media screen and (max-width: 368px) {
    font-size: 10vw;
  }
`;
