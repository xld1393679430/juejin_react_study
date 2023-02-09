import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
		//给定一个数字，我们可以在不使用外部库的情况下将其格式化为货币字符串。
		//API 提供了一种简单的NumberFormat方法来格式化给定国家/地区的货币：
		
		const formatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 2,
		});
		
		// 可选minimumFractionDigits参数表示小数部分的最小位数。调用该format函数将格式化输入，并根据国家/地区为货币添加前缀或后缀。
		
		formatter.format(2345); // '$2,345.00'
		formatter.format('2345'); // '$2,345.00'
		formatter.format('10000000'); // '$10,000,000.00'
	`

	return (
		<>
			<Alert message="将数字格式化为货币字符串" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index