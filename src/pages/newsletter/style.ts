import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  .box {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    h1 {
      font-size: 27px;
      color: ${({ theme }) => theme.sidebarColors["nav-bar-text-color"]}
    }

    p {
      font-size: 15px;
      margin: 26px;
      color: gray;
    }

    input {
      width: 85%;
      height: 36px;
      padding: 0 15px;
      border: 1px solid #ccc;
    }

    button {
      margin-top: 16px;
      width: 85%;
      height: 36px;
      border: none;
      background-color: ${({ theme }) => theme.primaryColors["highlight-color"]};
      color: ${({ theme }) => theme.primaryColors["primary-background-color"]};
      text-transform: uppercase;
      transition: all .3s;
    }

    button:hover {
      background-color: ${({ theme }) => theme.secondaryColors["secondary-background-color"]};
      color: ${({ theme }) => theme.primaryColors["primary-background-color"]};
    }
  }
`
