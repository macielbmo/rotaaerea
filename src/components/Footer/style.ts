import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 45px;
  background-color: ${({ theme }) => theme.colors.primary.dark};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 25px 0;

  .title a {
    font-size: 16px;
    text-decoration: none;
    color: ${({theme}) => theme.colors.primary.lighter};
  }

  .copyright {
    margin-top: 15px;
    font-size: 14px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary.lighter};
  }
`
