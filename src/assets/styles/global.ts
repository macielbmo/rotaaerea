import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
        text-decoration: none;
    }

    body {
        background-color: ${({ theme }) => theme.primaryColors["primary-background-color"]};
        font-size: 16px;
        height: 100vh;
    }

    button {
        cursor: pointer;
    }
`

export const Main = styled.main`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
`
