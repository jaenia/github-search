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
`;

export const Avatar = styled.figure`
  img {
    width: 280px;
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
