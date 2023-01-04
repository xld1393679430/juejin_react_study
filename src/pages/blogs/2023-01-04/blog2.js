import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
		<input list="demo__list" />
		<datalist id="demo__list">
			<option value="javascript" />
			<option value="css" />
			<option value="html" />
		</datalist>
	`

	return (
		<>
			<Alert message="使用 datalist 元素创建一个自动完成列表。该元素生成一个下拉列表，允许用户选择其选项。与普通select元素相比，该datalist元素提供了过滤选项的能力。用户还可以像普通文本框一样输入他们想要的内容。" type="success" />
			<Code tab>{code}</Code>
			<input list="demo__list" />
			<datalist id="demo__list">
				<option value="javascript" />
				<option value="css" />
				<option value="html" />
			</datalist>
		</>
	)
}

export default Index