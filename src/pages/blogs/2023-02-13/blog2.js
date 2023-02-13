import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		const memoize = (fn) =>
		(
			(cache = Object.create(null)) =>
			(arg) =>
				cache[arg] || (cache[arg] = fn(arg))
		)();

		const fibo = memoize((n) => (n <= 2 ? 1 : fibo(n - 1) + fibo(n - 2)));

		fibo(1); // 1
		fibo(2); // 1
		fibo(3); // 2
		fibo(4); // 3
		fibo(5); // 5
		fibo(6); // 8
	`

	return (
		<>
			<Alert message="记忆函数" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />
		</>
	)
}

export default Index