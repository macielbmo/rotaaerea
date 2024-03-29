import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 35px;
  padding: 0 10px;

  .loading {
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin: 0 auto;
      width: 70px;
      height: 70px;
    }
  }

  .article-header {
    width: 100%;
    max-height: 340px;

    display: flex;
    gap: 15px;
  }

  .grid-content {
    margin-top: 45px;
    width: 65%;
    color: ${({ theme }) => theme.sidebarColors["nav-bar-text-color"]}
  }

  @media (max-width: 760px) {
    .article-header {
      flex-direction: column;
      max-height: 720px;
    }

    .grid-content {
      width: 100%;
    }
  }
`
