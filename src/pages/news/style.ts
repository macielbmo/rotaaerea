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

    color: ${({ theme }) => theme.colors.primary.lighter};
    background-color: ${({ theme }) => theme.colors.primary.main};
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
    color: ${({ theme }) => theme.colors.primary.main};
  }

  .image {
    width: 100%;
    margin: 10px 0 25px;
  }

  .main {
    max-width: 60%;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
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
  }
`
