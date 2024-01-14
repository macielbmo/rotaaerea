import styled from "styled-components";

export const Container = styled.div`
  max-width: 1140px;

  display: flex;
  flex-direction: column;
  margin: 35px auto;

  .header, .main, .footer, .image {
    padding: 0 20px;
  }

  .header {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .catogory {
    max-width: fit-content;
    padding: 3px 7px;
    border-radius: 5px;

    text-transform: uppercase;
    font-size: 12px;

    color: ${({ theme }) => theme.newsColors["primary-text-color"]};
    background-color: ${({ theme }) => theme.newsColors["primary-background-color"]};
  }

  .title, .sub-title, .author, .main div {
    color: ${({ theme }) => theme.sidebarColors["nav-bar-text-color"]}
  }

  .title {
    font-size: 40px;
  }

  .sub-title {
    font-size: 18px;
  }

  .author {
    font-size: 12px;
  }

  .author strong {
    cursor: pointer;
    color: ${({ theme }) => theme.newsColors["third-text-color"]};
  }

  .image {
    width: 100%;
    margin: 10px 0 25px;
  }

  .main {
    max-width: 60%;
    font-size: 16px;
    line-height: 1.6;
    color: ${({ theme }) => theme.newsColors["news-text-color"]};
  }

  .main img {
    width: 100%;
    height: auto;
  }

  .ql-video {
    width: 80%;
    height: 350px;
  }

  @media (max-width: 1240px) {
    .title {
      font-size: 32px;
    }
  }

  @media (max-width: 1024px) {
    .main {
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 24px;
    }

    .sub-title {
      font-size: 16px;
    }

    .author {
      font-size: 10px;
    }

    .image {
      padding: 0;
    }

    .ql-video {
      width: 80%;
      height: 350px;
    }
  }

  @media (max-width: 375px) {
    .ql-video {
      width: 80%;
      height: 180px;
    }
  }
`
