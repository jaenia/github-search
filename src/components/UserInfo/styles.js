import styled from 'styled-components';

import { colors } from '../../styles/global';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 70px 28px 0;

  span {
    display: block;
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;

    section {
      display: flex;
      border-bottom: 1px solid #eee;
      padding-bottom: 24px;
      margin-bottom: 24px;

      figure img {
        max-width: 30vw;
      }

      span {
        margin-top: 0;
        width: 100%;
        margin-left: 24px;
      }
    }
  }
`;

export const Avatar = styled.figure`
  img {
    max-width: 280px;
    border-radius: 2px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  }
`;

export const Name = styled.span`
  font-size: 35px;
  margin-top: 12px;
`;

export const Login = styled.span`
  color: ${colors.gray};
  margin: 7px 0 28px;
  font-size: 20px;
`;
