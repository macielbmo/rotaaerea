import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: rgb(51, 51, 51, 0.98);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  .icon {
    position: absolute;
    right: 0;
    top: 0;
    margin: 30px 50px 0 0;

    transition: 0.8s;

    cursor: pointer;
  }

  .icon:hover {
    color: #027aff;
  }

  .search {
    color: #027aff;
    border-bottom: 1px solid #027aff;
  }

  .search span {
    font-size: 48px;
  }

  .search input {
    width: 600px;
    height: 150px;
    padding: 35px;

    border: none;
    background-color: rgb(51, 51, 51, 0);

    color: #fff;
    font-size: 48px;
  }

  .search input:focus {
    outline: none;
  }

  .search input::placeholder,
  textarea::placeholder {
    color: #d4d4d4;
  }

  .icon-exit {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    padding: 0 48px;

    .search {
      display: flex;
      width: 100%;
    }

    .search input{
      width: 100%;
      height: 48px;
      padding: 10px;
      font-size: 18px;
    }

    .search span {
      display: flex;
      align-items: center;
      font-size: 24px;
  }
  }
`
