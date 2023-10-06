import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 35px;

  .article-header {
    width: 100%;
    max-height: 340px;
    padding: 0 10px;

    display: flex;
    gap: 15px;
  }

  @media (max-width: 760px) {
    .article-header {
      flex-direction: column;
      max-height: 720px;
    }
  }
`
