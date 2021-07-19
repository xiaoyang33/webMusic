import React, { memo, Fragment } from "react";

import { footerLinks, footerImages } from "../../common/sumEnums";

import { Footer, ContentLeft, ContentRight } from "./style";

export default memo(function AppFooter() {
  return (
    <Footer>
      <div className="content wrap-v2">
        <ContentLeft>
          <ul className="service-list">
            {footerLinks.map(item => {
              return (
                <Fragment>
                  <a key={item.title} href={item.link}>
                    {item.title}
                  </a>
                  <span className="line">|</span>
                </Fragment>
              );
            })}
          </ul>
          <p>
            网易公司版权所有©1997-2021杭州乐读科技有限公司运营：浙网文[2021]
            1186-054号
          </p>
          <p>违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com</p>
          <p>
            粤B2-20090191-18 工业和信息化部备案管理系统网站 浙公网安备
            33010902002564号
          </p>
        </ContentLeft>
        <ContentRight>
          {
            footerImages.map(item=>{
              return (
                <li className="item" key={item.title}>
                  <a href={item.link}></a>
                  <span>{item.title}</span>
                </li>
              )
            })
          }
        </ContentRight>
      </div>
    </Footer>
  );
});
