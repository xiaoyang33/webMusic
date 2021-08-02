import styled from 'styled-components';


export const Disvocer = styled.div`
  width: 100%;

`
export const TopMenu = styled.div`
  width: 100%;
  height: 34px;
  background:#C20C0C ;

  .menu-list{
    display: flex;
    margin-left: 126px;
    li{
      line-height: 30px;
      padding: 0 16px;
      a{
        color: #fff;
        padding: 3px 12px;
        border-radius: 10px;
        text-decoration: none;
        &:hover{
          background: #9B0909;
        }

        &.active{
          background: #9B0909;

        }
      }
    }
  }
`