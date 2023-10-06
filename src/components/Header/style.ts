import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  background-color: ${({theme}) => theme.colors.backgroundColor};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content-menu {
    width: 100%;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid ${({theme}) => theme.colors.primary.dark};
    padding: 0 5px;
  }

  .menu {
    font-size: 24px;
    cursor: pointer;
  }

  .title a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.primary.dark};
  }

  .newsletter {
    display: flex;
    align-items: center;
    gap: 5px;

    font-size: 14px;
    font-weight: 600;

    cursor: pointer;
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
    cursor: pointer;
    transition: .3s;
  }

  .list li:hover {
    color: ${({theme}) => theme.colors.primary.light};
  }
`
