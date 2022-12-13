import React from 'react'
import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {

	const code1 = `
		const ready = (cb) => {
			return document.readyState === 'loading' ? document.addEventListener("DOMContentLoaded", cb) : cb()
		}
	`

	return (
		<div>
			<Alert message={`
				2, DOMContentLoaded 与 load
				差异 DOMContentLoaded当页面中的所有节点都已在 DOM 树中构建时，将触发该事件。load当所有资源（例如图像和子帧）完全加载时触发该事件。
				DOMContentLoadedIE 8 和旧版本的 IE 不支持该事件。 为了支持旧版本 IE 中的行为，我们可以使用该readyState属性来检查文档是否已完全加载：
			`} type="success"></Alert>
			<Code tab={true}>{code1}</Code>
		</div>
	)
}

export default Index