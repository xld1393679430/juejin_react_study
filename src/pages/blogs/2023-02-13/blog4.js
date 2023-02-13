import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const hexToRgb = (hex) =>
		hex
			.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
			.substring(1)
			.match(/.{2}/g)
			.map((x) => parseInt(x, 16));

	const code = `
		const hexToRgb = ${hexToRgb}

		hexToRgb('#00ffff'); // [0, 255, 255]
		hexToRgb('#0ff'); // [0, 255, 255]

		// test
		alert(hexToRgb('#00ffff'))
	`

	return (
		<>
			<Alert message="将十六进制转换为 rgb" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />
		</>
	)
}

export default Index