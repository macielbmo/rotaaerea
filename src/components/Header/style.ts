import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  background-color: ${({theme}) => theme.headerColors['nav-bar-background-color']};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content-menu {
    width: 100%;
    height: 72px;

    border-bottom: 1px solid ${({theme}) => theme.headerColors['nav-bar-text-color']};
    padding: 0 15px;

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: " burger logo nav";
    gap: 1rem
  }

  .menu, .title, .newsletter {
    display: flex;
    align-items: center;
  }

  .menu {
    font-size: 24px;
    color: ${({theme}) => theme.headerColors['nav-bar-text-color']};
    cursor: pointer;
  }

  .title a {
    text-decoration: none;
    color: ${({theme}) => theme.headerColors['nav-bar-text-color']};
  }

  .newsletter {
    justify-content: flex-end;
    gap: 5px;

    font-size: 14px;
    font-weight: 600;
    color: ${({theme}) => theme.headerColors['nav-bar-text-color']};

    cursor: pointer;
  }

  .link {
    display: flex;
    justify-content: end;
  }

  .content-nav {
    width: 100%;
    height: 47px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .list {
    list-style: none;

    display: flex;
    gap: 25px;
  }

  .list li{
    color: ${({theme}) => theme.headerColors['nav-bar-text-color']};
    cursor: pointer;
    transition: .3s;
  }

  .list li:hover {
    color: ${({theme}) => theme.headerColors['nav-bar-text-second-color']};
  }

  @media (max-width: 760px) {
    .newsletter {
      display: none;
    }

    .content-nav {
      display: none;
    }
  }
`
