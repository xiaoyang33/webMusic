import styled from "styled-components";
import img from '@/assets/img/sprite_01.png';

export const Header = styled.div`
  height: 75px;
  background: #242424;
  border-bottom: 5px solid #c20c0c;
  font-size: 14px;
  .content {
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const ContentLeft = styled.div`
  display: flex;

  .logo {
    display: inline-block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
  }
  .select-item {
    /* width: 94px; */
    text-align: center;

    a {
      text-decoration: none;
      color: #ccc;
      position: relative;

      line-height: 70px;
      height: 70px;
      display: inline-block;
      padding: 0 19px;
      &:hover {
        background: #000;
        color: #fff;
      }
      
      &.active{
        color: red;
        background: #000;
        &::after{
          content: '';
          position: absolute;
          left: 50%;
          top: 64px;
          width: 12px;
          height: 7px;
          transform: translateX(-50%);
          background: url(${img}) no-repeat 0 ;
          background-position: -226px 0;
        }
      }
    }

    &:last-of-type a{
      &::after{
          content: '';
          position: absolute;
          top: 21px;
          left: 100px;
          width: 28px;
          height: 19px;
          background: url(${img});
          background-position: -190px 0;
      }
    }
  }
`;
export const ContentRight = styled.div`
  display: flex;
  align-items: center;
  
  .ant-input-affix-wrapper{
    border-radius: 16px;
    width: 158px;
  }
  input{
    &::placeholder{
      font-size: 12px;
    }
  }

  .btn{
    width: 90px;
    height: 32px;
    color: #ccc;
    border-radius: 20px;
    border: 1px solid #4F4F4F;
    margin: 0 12px;
    font-size:12px;
    line-height: 32px;
    text-align:center;
    cursor: pointer;
    &:hover{
      color: #fff;
      border-color: #fff;
    }
  }

  .login{
    font-size: 12px;
  }
`;
