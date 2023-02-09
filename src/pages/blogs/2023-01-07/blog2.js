import { Alert, Button } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
		instanceof不适用于原始类型。

		如果你想一直使用instanceof，那么你可以instanceof通过实现一个带有键的静态方法来覆盖 的行为Symbol.hasInstance。
		在下面的代码中，我们创建了一个名为PrimitiveNumber检查值是否为数字的类：
		
		class PrimitiveNumber {
			static [Symbol.hasInstance](value) {
				return typeof value === 'number';
			}
		}
		
		12345 instanceof PrimitiveNumber; // true
		'helloworld' instanceof PrimitiveNumber; // false
	`

	return (
		<>
			<Alert message="覆盖 instanceof 的行为" type="success" />
			<Code tab>{code}</Code>
		</>
	)
}

export default Index