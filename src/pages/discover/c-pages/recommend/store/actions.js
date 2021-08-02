
import * as actionsType from './contant';
import {
  getBanners
} from '@/service/recommend';

export const changeBanners = (res) =>{
  return {
    type:actionsType.CAHNGE_BANNER,
    banners:res.data.banners
  }
}


export const getBannersActions = () => {
  return dispath => {
    getBanners().then(res=>{
      dispath(changeBanners(res))
    })
  }
}