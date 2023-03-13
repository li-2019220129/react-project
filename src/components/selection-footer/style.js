import styled from 'styled-components'

export const SelectionFooterWrapper = styled.div`
  margin-top: 10px;
  .info {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 17px;
    color: ${(prop) => prop.color};
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
    .text {
      margin-right: 6px;
    }
  }
`
