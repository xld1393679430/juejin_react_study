import React, { useState, useEffect, useRef } from 'react'
import './index.css'

const Progress = ({ play }) => {
	// 可以使用setProperty或者style方式设置var变量
	// const progressRef = useRef(null)

	// useEffect(() => {
	// 	progressRef.current.style.setProperty("--play", play ? "running" : "paused")
	// }, [play])

	return (
		<div className="progress-bar">
			<div className="progress-bar__progress" style={{ "--play": play ? "running" : "paused" }}></div>
		</div>
	)
}

const Index = () => {
	const [play, setPlay] = useState(false)

	useEffect(() => {

	}, [])

	return (
		<div>
			<p>
				<a href="https://cssanimation.dev/indeterminate-progress-bar/">来源：不确定的进度条</a>
			</p>
			<button onClick={() => setPlay(!play)}>{play ? "关闭" : "开启"}</button>
			<Progress play={play} />
		</div>
	)
}

export default Index