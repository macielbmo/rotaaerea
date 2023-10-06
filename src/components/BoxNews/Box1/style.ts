import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;

  position: relative;
  overflow: hidden;

  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;

    position: absolute;
    bottom: 0;
    padding: 20px 20px;
    color: white;

    background: linear-gradient(0deg,#181818,#181818 10%,rgba(24,24,24,0) 90%);
  }

  .category {
    font-size: 12px;
    display: block;
  }

  .category p {
    text-transform: uppercase;

    width: max-content;
    padding: 3px 7px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.primary.main};
  }

  .content h1 {
    font-size: 24px;
  }

  .author {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 12px;
    font-weight: 200;
  }

  @media (max-width: 1080px) {
    .category, .author {
      font-size: 10px;
    }

    .content h1 {
      font-size: 18px;
    }
  }
`
