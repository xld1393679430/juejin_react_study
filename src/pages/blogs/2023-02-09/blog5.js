import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
	如果网站的内容是用特定语言编写的，则访问者在使用某些浏览器（例如Google Chrome ）时可能会被提示将其翻译成另一种语言。

	translate您可以通过设置整个文档的属性来防止这种情况发生：
	
	<html translate="no"></html>
	该translate属性对某些翻译工具有影响，例如Google Translate。
	
	此外，它是一个全局属性，意味着我们可以将它用于任何元素。如果即使页面已翻译，我们也不想翻译品牌名称，这将非常有用：
	
	<footer>(c) 2021 <span translate="no">Brand Name</span></footer>
	`

	return (
		<>
			<Alert message="防止浏览器要求翻译" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index