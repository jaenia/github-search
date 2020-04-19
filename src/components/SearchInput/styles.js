import styled, { keyframes, css } from 'styled-components';

import { colors } from '../../styles/global';

export const Form = styled.form`
  display: flex;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);

  input {
    width: 650px;
    padding: 10px 15px;
    border: 0;
    color: ${colors.gray};
    font-weight: 300;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  border: 0;
  border-radius: 2px;
  padding: 0 15px;
  width: 100px;
  height: 50px;
  background-color: ${colors.lighterPurple};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      img {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
