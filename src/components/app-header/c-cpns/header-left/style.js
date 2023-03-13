import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  padding: 0 0 0 30px;
  color: ${props=>props.theme.color.primaryColor};
  .logo {
    display:flex;
    align-items:center;
    cursor: pointer;
  }
`
