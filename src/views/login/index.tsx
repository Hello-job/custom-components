import React, { memo } from 'react';
import Style from './index.module.less'
import MainBox from './MainBox'
const Login  = () => {
    return <div className={Style.login}>
       			<img
				src="https://polaris-hd2.oss-cn-shanghai.aliyuncs.com/front_resources/login_background.png"
				alt=""
				className={Style.LoginBg}
			/>
			 <MainBox/>
    </div>
}

export default memo(Login);