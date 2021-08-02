import styled from "styled-components";
import downLoad from '@/assets/img/download.png';

export const BannerWrapper = styled.div`
  background: url(${props=>props.bgImg}) center / 6000px;
  height: 285px;
  width: 100%;
  border-bottom: 2px solid #eee;
  .banner{
    display: flex;
  }
`

export const BannerLeft = styled.div`
  height: 100%;
  width: 730px;
  .banner-item{
    width: 100%;
    height: 285px;
    img{
      width: 100%;
      height: 285px;
    }
  }
`

export const BannerRight = styled.div`
   width: 254px;
   height: 285px;
   background: url(${downLoad}) no-repeat 0 0;
   cursor: pointer;
`