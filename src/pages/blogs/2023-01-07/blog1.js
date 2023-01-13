import { Alert, Button } from 'antd'
import Code from '@/components/Code'

class Test {
	get [Symbol.toStringTag]() {
		return "MyArray"
	}
}

const Index = () => {
	const code = `
		class Test {
			get [Symbol.toStringTag]() {
				return "MyArray"
			}
		}
	`

	const handleView = () => {
		alert(Object.prototype.toString.call(new Test()))
	}


	return (
		<>
			<Alert message="如何返回自定义的[object MyArray]类型" type="success" />
			<Code tab>{code}</Code>
			<Button onClick={handleView}>查看Object.prototype.toString.call(new Test())</Button>
		</>
	)
}

export default Index