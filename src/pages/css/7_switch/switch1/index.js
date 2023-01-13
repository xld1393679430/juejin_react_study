import React, { useState } from 'react'
import "./index.css"

const Index = () => {
	const [list] = useState(["Monthly", "Yearly"])
	const [idx, setIdx] = useState(0)

	const handleChange = (e) => {
		const index = e.target.dataset.idx
		setIdx(Number(index))
	}

	return (
		<div className="switch1">
		{
			list.map((item, index) => {
				return <div key={index} className={`switch-item ${idx === index ? "active" : null}`} data-idx={index} onClick={handleChange}>{item}</div>
			})
		}
		</div>
	)
}

export default Index