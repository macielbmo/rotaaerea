import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .menu {
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px
  }

  .icon {
    margin: 0;
    font-size: 22px;
    transition: all .3s;
  }

  .icon:hover {
    color: ${({ theme }) => theme.colors.primary.main}
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .item {
    list-style: none;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  .item:first-child {
    margin-top: 10px;
  }

  .item:last-child {
    margin-bottom: 15px;
  }
`
