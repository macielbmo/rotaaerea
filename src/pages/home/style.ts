import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 35px;
  padding: 0 10px;

  .article-header {
    width: 100%;
    max-height: 340px;

    display: flex;
    gap: 15px;
  }

  .grid-content {
    margin-top: 45px;
  }

  @media (max-width: 760px) {
    .article-header {
      flex-direction: column;
      max-height: 720px;
    }
  }
`
