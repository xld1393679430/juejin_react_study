import React, { useState, useEffect, useRef } from 'react'
import "./index.css"

const InputInvalid = () => {

	const inputRef = useRef(null)

	const handleCheck = (e) => {
		e.target.classList.add("input--invalid")
	}


	useEffect(() => {
		// 监听css动画结束后 移除相关class
		inputRef.current.addEventListener("animationend", () => {
			inputRef.current.classList.remove("input--invalid")
		})
	}, [])

	return (
		<input type="email" ref={inputRef} onBlur={handleCheck} onSubmit={handleCheck} />
	)
}

const Index = () => {

	return (
		<div>
			<p>
				<a href="https://cssanimation.dev/invalid-input/">来源：输入无效</a>
			</p>
			<div>
				<InputInvalid />
			</div>
		</div>
	)
}

export default Index