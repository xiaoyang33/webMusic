import request from './request';


export const getBanners = ()=>{
  return request({
    url:'/banner'
  })
}