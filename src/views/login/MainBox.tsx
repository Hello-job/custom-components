import React,{ memo } from 'react'
import Style from './index.module.less'
import Pwdlogin from './pwdlogin'
import CodeLogin from './codeLogin'
export const  MainBox = () => {
    return <div className={Style.MainBox}>
         <div className={Style.loginFrom}>
             <div className={Style.logoBox}>
                 <div className={Style.logo}>
                     <img src='http://192.168.1.11:9201/static/img/logo@2x.eedf4b1e.png' />
                 </div>
                 <div className={Style.AppName}>
                     <p>极星协作</p>
                     <span>灵活安全的项目管理工具</span>
                 </div>
             </div>
             <Pwdlogin></Pwdlogin>
         </div>
    </div>
}

export default memo(MainBox);