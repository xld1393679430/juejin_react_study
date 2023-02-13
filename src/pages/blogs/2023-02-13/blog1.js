import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		const curry = (fn, ...args) => (fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args));

		const sum = (a, b, c) => a + b + c;
		curry(sum)(1)(2)(3); // 6
		curry(sum)(1, 2, 3); // 6
		curry(sum, 1)(2, 3); // 6
		curry(sum, 1)(2)(3); // 6
		curry(sum, 1, 2)(3); // 6
		curry(sum, 1, 2, 3); // 6

		// test
		const total = curry(sum, 1, 2, 3);
		alert(total)

	`

	return (
		<>
			<Alert message="函数科里化" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />

		</>
	)
}

export default Index