import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;

  width: 420px;
  height: 100vh;
  padding: 48px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  box-shadow: 35px 0px 75px rgba(0, 0, 0, 0.5);

  .top-sidebar {
    display: flex;
    justify-content: space-between;
  }

  .icon {
    font-size: 24px;
    cursor: pointer;
  }

  .content ul {
    display: flex;
    flex-direction: column;
    gap: 25px;

    margin-top: 45px;
  }

  .newsletter {
    margin-top: 90px;

    display: flex;
    justify-content: flex-start;
    gap: 15px;
    color: ${({ theme }) => theme.colors.primary.dark};
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
