import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  img{
    width: 2rem,
    height: 2rem,
  }

  @media (max-width: 450px){
    width: auto;
    position: absolute;
    left: 1rem;

    div{
      display: none;
    }
  }

`

