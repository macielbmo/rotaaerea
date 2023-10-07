import styled from "styled-components";

export const Container = styled.div`
  .title-tag {
    height: 128px;
    background-color: ${({ theme }) => theme.colors.primary.dark};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title-tag h1 {
    text-transform: uppercase;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.primary.lighter};
  }

  .grid-content {
    margin-top: 35px;
    width: 65%;
  }

  .title-grid h1 {
    font-size: 28px;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`
