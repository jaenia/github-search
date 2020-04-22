import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    min-width: 280px;
    margin-right: 70px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    h1 {
      min-width: 0;
      margin-right: 0;
      margin-bottom: 16px;
    }
  }
`;
