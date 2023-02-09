import { Alert } from 'antd'
import Code from '@/components/Code'
import Editor from "@/pages/editor/Editor"

const Index = () => {
	const code = `
		// 使用MessageChannel深拷贝
		const obj = {
			name: 1,
			children: {
				age: 2
			}
		}

		function deepClone(obj) {
			return new Promise((resolve, reject) => {
				const { port1, port2 } = new MessageChannel()

				port1.onmessage = function ({ data }) {
					resolve(data)
				}

				port1.onmessageerror = function (error) {
					reject(error)
				}

				port2.postMessage(obj)
			})
		}

		deepClone(obj).then(data => {
			console.log(data, 222);
			alert(JSON.stringify(data))
		})
	`

	return (
		<>
			<Alert message="使用MessageChannel深拷贝" type="success" />
			<Editor title={"使用MessageChannel深拷贝"} jsContent={code} showIframe={false} />
		</>
	)
}

export default Index