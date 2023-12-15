import styled from "styled-components";

export const Container = styled.div`
  .title-tag {
    height: 128px;
    background-color: ${({ theme }) => theme.categoryColors["primary-background-color"]};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title-tag h1 {
    text-transform: uppercase;
    font-size: 28px;
    color: ${({ theme }) => theme.categoryColors["primary-text-color"]};
  }

  .grid-content {
    margin-top: 35px;
    width: 65%;
  }

  .title-grid h1 {
    font-size: 28px;
    color: ${({ theme }) => theme.categoryColors["secondary-text-color"]};
  }

  .title-grid h3 {
    font-weight: 300;
  }
`
