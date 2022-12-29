import React, { useState, useEffect } from 'react'
import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
		// rem 兼容多屏幕宽度 以设计稿750为例， 最终 元素的宽度= 设计稿元素的宽度 / 100
		const witdh = document.documentElement.clientWidth || document.body.clientWidth;
		const radio = witdh / 375;
		const fontSize = 100 * radio;
		document.getElementsByTagName("html")[0].style["font-size"] = fontSize + "px";
	`

	return (
		<>
			<Alert message="2，响应式" type="success"></Alert>
			<Code tab>{code}</Code>
		</>
	)
}

export default Index