import React, { useState } from 'react'
import { Button, Menu, Col, Row, message, Divider, Alert } from 'antd';
import { FileAddOutlined, FolderOutlined } from "@ant-design/icons";
import Code from '@/components/Code'

const Index = () => {
	const [text, setText] = useState('')
	const [items, setItems] = useState([])
	const [selectedKeys, setSelectedKeys] = useState([''])

	const porcessHandle = async (handle) => {
		if (handle.kind === 'file') {
			const file = await handle.getFile()
			if (/text\/*/.test(file.type)) {
				return handle;
			}
			return null
		}
		handle.children = []
		for await (const item of handle.entries()) {
			const child = await porcessHandle(item[1])
			if (child) {
				handle.children.push(child)
			}
		}
		return handle
	}

	const chooseFiles = async () => {
		try {
			const handle = await window.showDirectoryPicker()
			const root = await porcessHandle(handle)

			const _items = createMenu(root.children)
			setItems(_items)

			const defaultItem = _items[0]

			if (defaultItem.children.length) {
				setSelectedKeys([defaultItem.children[0].key])

				const options = {
					item: { props: { fileHandle: defaultItem.children[0].fileHandle } },
					key: defaultItem.children[0].key
				}
				handleMenuSelect(options)
			} else {
				setSelectedKeys([defaultItem.key])

				const options = {
					item: { props: { fileHandle: defaultItem.fileHandle } },
					key: defaultItem.key
				}
				handleMenuSelect(options)
			}
		} catch (error) {
			message.error("用户未授权")
		}
	}

	const createMenu = (array, newArray = [], parentName = '') => {
		for (let i = 0; i < array.length; i++) {
			const item = array[i]
			if (!item) {
				continue;
			} else if (!item.children) {
				newArray.push({
					key: `${parentName}_${item.name}_${i}`,
					label: item.name,
					icon: <FileAddOutlined />,
					fileHandle: item
				})
			} else if (item.children.length === 0) {
				continue
			} else if (item.children.length > 0) {
				newArray.push({
					key: `${parentName}_${item.name}_${i}`,
					label: item.name,
					icon: <FolderOutlined />,
					children: createMenu(item.children, undefined, item.name),
					fileHandle: item
				})
			}
		}
		return newArray
	}

	const handleMenuSelect = async ({ item, key }) => {
		const fileHandle = item.props.fileHandle
		const file = await fileHandle.getFile()
		const reader = new FileReader()
		reader.onload = function (e) {
			setText(e.target.result)
		}
		reader.readAsText(file, 'utf-8')
		setSelectedKeys([key])
	}

	return (
		<div>
			<Button onClick={chooseFiles}>选择文件并实现预览效果</Button>
			<Divider />
			<Row>
				<Col span={4} style={{ height: 700, overflow: 'scroll' }}>
					<Menu
						selectedKeys={selectedKeys}
						mode="inline"
						theme="dark"
						items={items}
						onSelect={handleMenuSelect}
						style={{
							backgroundColor: 'rgb(30, 30, 30)',
							paddingRight: 10
						}}
					/>
				</Col>
				<Col span={20} style={{ height: 700, overflow: 'scroll' }}>
					<div style={{ margin: '-0.5em 0', height: '100%' }}>
						{text ? <Code minHeight>{text}</Code> : null}
					</div>
				</Col>
			</Row>
		</div>
	)
}

export default Index