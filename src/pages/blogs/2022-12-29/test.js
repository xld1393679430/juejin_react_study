import React, { useState, useEffect, useLayoutEffect } from 'react'
import "./test.less"

const Index2 = () => {
	const [value, setValue] = useState(0);
	useEffect(() => {
		if (value === 0) {
			setValue(10 + Math.random() * 200);
		}
	}, [value]);
	console.log("render", value);
	return (
		<div onClick={() => setValue(0)}>value: {value}</div>
	);
}

const Index = () => {
	const [animationContent, setAnimationContent] = useState("");
	const [count, setCount] = useState(0)
	useEffect(() => {
		const box = document.getElementById("animation-box");
		const text = document.getElementById("animation-text");

		console.log(box,text, 222 )
		if (box.offsetWidth < text.offsetWidth) {
			// 文字少于屏幕宽时，不滚动
			setAnimationContent(`move ${text.offsetWidth / 32}s linear infinite`); // 32 是移动的速度，值越大，则滚动越快

			setCount(count + 1)
		}
	}, [count]);
	return (
		<div className="animation-banner">
			<div className="img-box">
				<img
					src="https://pages.c-ctrip.com/you//destination/zhengcechaxun.png"
				/>
			</div>
			<div className="text-box" id="animation-box">
				<p
					className="text"
					id="animation-text"
					style={{ animation: animationContent }}
				>
					1111井之頭恩賜公園先前是皇家苑圃，早在1917年開園，是東京人氣很高的賞櫻戀愛勝地之一。、兒童遊和慢跑線路。222
				</p>
			</div>
		</div>
	);

}

export default Index