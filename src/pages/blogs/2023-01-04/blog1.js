import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
		const rangArray1 = (min, max) => {
			return Array.from({ length: max - min + 1 }, (_, index) => min + index)
		}

		const rangArray2 = (min, max) => {
			return Array(max - min + 1).fill(0).map((_, index) => min + index)
		}
	`

	return (
		<>
			<Alert message="创建给定范围内的数字数组" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index