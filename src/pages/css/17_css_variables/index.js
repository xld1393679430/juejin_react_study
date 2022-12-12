import React, { useState, useEffect } from 'react'

const Index = () => {
	const [state, setState] = useState(null)

	useEffect(() => {

	}, [])

	const handleDragStart = (e) => {
		console.log(e)
	}

	return (
		<div draggable style={{ border: "1px solid red", height: 400 }} onDragStart={handleDragStart}>
			<p>鼠标拖拽时, 通过CSS变量来确定选择框的定位(基于鼠标的开始位置和当前位置)</p>
			
		</div>
	)
}

export default Index