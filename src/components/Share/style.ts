import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  margin: 15px 0;

  a {
    color: white;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;

    width: fit-content;
    padding: 10px;
    border-radius: 5px;
    background-color: #5872A7;

    color: white;
    user-select: none;
    cursor: pointer;
  }

  .btn span {
    display: flex;
    align-items: center;
  }

  .logo {
    margin: 0;
    font-size: 14px;
  }

  .instagram {
    background-color: #E64559;
  }

  .linkedin {
    background-color: #0A66C2;
  }

  .telegram {
    background-color: #179CDE;
  }

  .twitter {
    background-color: #00ACED;
  }

  .whatsapp {
    background-color: #25D366;
  }
`
