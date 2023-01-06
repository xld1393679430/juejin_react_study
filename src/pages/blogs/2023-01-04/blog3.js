import { Alert, Divider } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
		@media print {
			a::after {
				content: ' (' attr(href) ') ';
			}
		}
	`

	return (
		<>
			<Alert message="在打印模式下显示链接" type="success" />
			<Alert message="当用户打印网页时，他们将看不到实际的链接。如果一个链接同时显示文本和它的链接，将会更有用。我们可以通过在:after元素中包含链接来做到这一点" type="info" />
			<Code tab>{code}</Code>
			{/* Normal mode */}
			<p>
				<a href="https://getfrontend.tips">Front-End Tips</a>
			</p>

			{/* Print mode */}
			<p>
				<a href="https://getfrontend.tips">Front-End Tips (https://getfrontend.tips)</a>
			</p>
		</>
	)
}

export default Index