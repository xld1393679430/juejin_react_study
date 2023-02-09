import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
		// 我们可以利用Intl.ListFormat对象为给定的语言环境格式化列表：

		const people = ['Foo', 'Bar', 'Fuzz'];

		new Intl.ListFormat('en', { type: 'conjunction' }).format(people);
		// 'Foo, Bar, and Fuzz'
		
		new Intl.ListFormat('en-GB', { type: 'disjunction' }).format(people);
		// 'Foo, Bar, or Fuzz'
	`

	return (
		<>
			<Alert message="利用Intl.ListFormat对象为给定的语言环境格式化列表" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index