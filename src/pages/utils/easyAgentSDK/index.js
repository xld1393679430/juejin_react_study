import React, { useEffect } from 'react'
import { Alert } from 'antd'
import Code from '@/components/Code'
import EasyAgentSDK, { code } from './lib/index'

const Index = () => {

	useEffect(() => {
		window.SDK = new EasyAgentSDK({
			appId: '123456789',
			baseUrl: `${process.env.REACT_APP_BASE_URL}/api/easyAgentSDK`,
			onPageShow() {
				console.log("onPageShow")
			}
		  });
		  
		  window.SDK.setConfig({
			userId: 'aa', // 当前用户 id
			userName: "AA", // 当前用户 name
		  });
	}, [])

	return (
		<div>
			<Alert message="监控平台" type="success"></Alert>
      		<Code>{code}</Code>
		</div>
	)
}

export default Index