import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import {headerList} from '@/common/sumEnums';
import { Header , ContentLeft ,ContentRight } from './style'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default memo(function AppHeader() {
  function handleNav(item,index){
    if(index<3){
      return <NavLink  to={item.path}>{item.title}</NavLink>
    }else{
      return <a href={item.path} target="_blank" rel="noreferrer">{item.title}</a>
    }
  }

  return (
    <Header>
      <div className="content wrap-v1">
        <ContentLeft>
          <a href="#/" className="logo sprite_01" >网易云音乐</a>
          <ul className="select-list">
            {
              headerList.map((item,index)=>{
                return <li className="select-item" key={index}>{handleNav(item,index)}</li>
              })  
            }
          </ul>
        </ContentLeft>
        <ContentRight>
            <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
            <div className="btn">创作者中心</div>
            <a href="#/" className="login">登录</a>
        </ContentRight>
      </div>
    </Header>
  )
})
