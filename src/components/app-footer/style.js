import styled from "styled-components";
import img from '@/assets/img/sprite_footer_02.png';

export const Footer = styled.div`
  background: #F2F2F2;
  /* height: 173px; */
  padding: 15px 0;
  .content{
    /* background: red; */
    height: 100%;
    display: flex;
    justify-content: space-between;
    font-size:12px;
  }
`
export const ContentLeft = styled.div`
  .service-list{
    display: flex;

    .line{
      margin: 0 8px 0 10px;
      display: inline-block;
      color: #c2c2c2;
    }
    a{
      color: #999;
    }
  }
  
  p{
      line-height: 1.8;
    }
`
export const ContentRight = styled.ul`
  display: flex;
  align-items: center;

  .item{
    width: 60px;
    height: 70px;
    margin: 0 10px;
  }

  a{
    width: 50px;
    height: 45px;
    display: inline-block;
    background: url(${img}) no-repeat ;
    background-position: -63px -386px;
    background-size: 110px 430px;
    text-indent: -9999px;
  }
  
`