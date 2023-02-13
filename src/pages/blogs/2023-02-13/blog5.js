import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const rgbToHex = (red, green, blue) => `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;

	const code = `
		const rgbToHex = ${rgbToHex};

		//test
		alert(rgbToHex(0, 255, 255))

	`

	return (
		<>
			<Alert message="将 RGB 颜色转换为十六进制" type="success" />
			{/* <Code tab>{code}</Code> */}
			<Editor jsContent={code} showIframe={false} />
		</>
	)
}

export default Index