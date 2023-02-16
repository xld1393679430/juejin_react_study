import { Alert } from 'antd'
import Tesseract from './Tesseract'

const Index = () => {

	return (
		<div>
			<Alert message="将图像转换为文本" description="来源（https://www.smashingmagazine.com/2021/06/image-text-conversion-react-tesseract-js-ocr/）" type="success" />
			<Tesseract />
		</div>
	)
}

export default Index