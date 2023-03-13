import styled from 'styled-components'

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.color.textColor};
  font-weight: 600;
  .btns {
    display: flex;
    align-items: center;

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}
    .panel {
      position: absolute;
      top: 50px;
      right: 4px;
      width: 240px;
      border-radius: 10px;
      box-shadow: 0 3px 20px 0px rgba(0, 0, 0, 0.18);
      background-color: #fff;
      .top,
      .bottom {
        padding: 10px 0;
        .item{
          height:40px;
          line-height:40px;
          padding:0 16px;
          &:hover{
            background-color: #f5f5f5;
          }
        }
      }
      .top{
        border-bottom:1px solid #ddd;
      }
    }
  }
`
