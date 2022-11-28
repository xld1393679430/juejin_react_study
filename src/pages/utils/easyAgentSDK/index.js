import React, { useEffect } from 'react'
import EasyAgentSDK from './lib/index'

const Index = () => {

	useEffect(() => {
		window.SDK = new EasyAgentSDK({
			appId: '123456789',
			baseUrl: '/api/easyAgentSDK',
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
			<p>Page</p>
		</div>
	)
}

export default Index