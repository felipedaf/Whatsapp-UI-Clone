import styled from "styled-components";


export const FSection = styled.div`
  min-width: 260px;
  min-height: 100vh;
  width: calc(260px + 32%);

  @media (min-width: 1300px) {
    width: calc(260px + 22%);
  }
`

export const SSection = styled.div`
  min-width: 390px;
  min-height: 100vh;
  width: calc(390px + 68%);

  @media (min-width: 1300px) {
    width: calc(260px + 78%);
  }
`