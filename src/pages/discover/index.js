import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import {dicoverMenu} from '@/common/sumEnums';

import {
  Disvocer,
  TopMenu
} from './style';
export default memo(function Discover(props) {
  console.log(props);
  return (
    <Disvocer>
      <TopMenu>
        <div className="wrap-v2">
          <ul className="menu-list">
            {
              dicoverMenu.map(item=>{
                return (
                  <li key={item.title}>
                    <NavLink to={item.link}>{item.title}</NavLink>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </TopMenu>
      {renderRoutes(props.route.routes)}
    </Disvocer>
  )
})
