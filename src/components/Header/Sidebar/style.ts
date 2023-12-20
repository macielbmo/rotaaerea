import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;

  width: 420px;
  height: 100vh;
  overflow-y: auto;

  padding: 48px;
  background-color: ${({ theme }) => theme.sidebarColors["nav-bar-background-color"]};
  box-shadow: 35px 0px 75px rgba(0, 0, 0, 0.5);

  .top-sidebar {
    display: flex;
    justify-content: space-between;
  }

  .icon {
    font-size: 24px;
    color: ${({ theme }) => theme.sidebarColors["nav-bar-text-color"]};
    cursor: pointer;
  }

  .icon:hover {
    color: ${({ theme }) => theme.sidebarColors["nav-bar-text-second-color"]}
  }

  .content ul {
    display: flex;
    flex-direction: column;
    gap: 25px;

    margin-top: 45px;
  }

  .theme {
    display: flex;
    align-items: center;

    margin-top: 35px;
    gap: 25px;

    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;

    color: ${({ theme }) => theme.sidebarColors["nav-bar-text-color"]}
  }

  .newsletter {
    margin-top: 90px;

    display: flex;
    justify-content: flex-start;
    gap: 15px;
    color: ${({ theme }) => theme.sidebarColors["nav-bar-text-color"]};
  }

  .link {
    display: flex;
    justify-content: flex-start;
  }

  .newsletter .icon {
    font-size: 24px;
  }

  .newsletter span {
    font-size: 18px;
    font-weight: 900;
  }

  .newsletter span:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`
