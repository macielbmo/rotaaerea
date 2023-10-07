import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  width: 65%;
  height: auto;

  margin-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray.lighter};

  .box-img {
    max-width: 30%;
    aspect-ratio: 4 / 3;

    position: relative;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    top: 0;
    left: 0;
    border-radius: 10px;
  }

  .content {
    max-width: 70%;
    height: auto;
    padding: 5px 0 5px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    word-wrap: break-word;
  }

  .category {
    cursor: pointer;

    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  .title {
    font-size: 28px;
  }

  .author {
    display: flex;
    gap: 10px;
    font-size: 14px;
  }

  .author span {
    cursor: pointer;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 22px;
    }
  }

  @media (max-width: 414px) {
    display: block;

    .box-img {
      aspect-ratio: 16 / 9;
    }

    img {
      height: 100%;
    }

    .content {
      max-width: 100%;
      padding: 10px 5px 0;
    }

    .title {
      font-size: 20px;
    }

    .box-img {
      max-width: 100%;
    }

    .author, .category {
      font-size: 12px;
    }
  }
`
