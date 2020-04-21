import styled from 'styled-components';

export const Title = styled.div`
  font-size: ${(props) => props.size};
  font-weight: 200;
  font-style: italic;

  span {
    font-family: 'Oxygen Mono';
    font-style: normal;
  }

  @media screen and (max-width: 500px) {
    font-size: 11vw;
  }
`;
