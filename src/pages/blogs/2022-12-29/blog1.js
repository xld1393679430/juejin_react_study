import { Alert, Button } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
		function download(data, name) {
			const a = document.createElement("a")
			const result = data.map(item => {
				return Object.values(item).join("\t")
			}).join("\n")
			a.href = URL.createObjectURL(new Blob([result]))
			a.setAttribute("download", name)
			a.click()
		}

		download([
			{ id: "ID", name: "姓名", age: "年龄" },
			{ id: "1", name: "张三", age: "11" },
			{ id: "2", name: "李四", age: "12" },
			{ id: "3", name: "王五", age: "131" }
		], "用户信息.csv")
	`

	const handleDownload = () => {
		function download(data, name) {
			const a = document.createElement("a")
			const result = data.map(item => {
				return Object.values(item).join("\t")
			}).join("\n")
			a.href = URL.createObjectURL(new Blob([result]))
			a.setAttribute("download", name)
			a.click()
		}

		download([
			{ id: "ID", name: "姓名", age: "年龄" },
			{ id: "1", name: "张三", age: "11" },
			{ id: "2", name: "李四", age: "12" },
			{ id: "3", name: "王五", age: "131" }
		], "用户信息.csv")
	}

	return (
		<>
			<Alert message="下载文件" type="success"></Alert>
			<Button onClick={handleDownload}>下载 csv</Button>
			<Code tab>{code}</Code>
		</>
	)
}

export default Index