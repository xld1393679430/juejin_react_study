import { Alert } from 'antd'
import dedent from 'dedent'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"



const Index = () => {

	const code = `
		function round(number, decimals) {
			if (Number.isNaN(number) || Number.isNaN(decimals)) {
				return number
			}
			// 先放大倍数 -> 四舍五入有 -> 缩小倍数
			const n = Math.round(number + 'e' + decimals)
			return Number(n + 'e-' + decimals)
		}

		// test
		var result = round(1.234567, 3);
		alert(result);
	`

	return (
		<>
			<Alert message="将数字四舍五入到给定的位数" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />

		</>
	)
}

export default Index