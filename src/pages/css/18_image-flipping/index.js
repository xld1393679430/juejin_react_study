import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react'
import "./ndex.css"


const Flip = forwardRef(({ direction }, ref) => {
	const innerEle = useRef(null)

	const handleFlip = () => {
		innerEle.current.classList.toggle('flipping-images__inner--flip')
	}

	useImperativeHandle(ref, () => {
		return {
			handleFlip
		}
	})

	return (
		<div className='flipping-images'>
			<div class="flipping-images__inner" data-direction={direction} ref={innerEle} onClick={handleFlip}>

				<div className="flipping-images__side flipping-images__side--front">
					<img className="flipping-images__img" src="https://youimg1.tripcdn.com/target/100h0z000000mkjxn58E1.jpg" />
				</div>

				<div className="flipping-images__side flipping-images__side--back" data-direction={direction}>
					<img className="flipping-images__img" src="https://youimg1.tripcdn.com/target/010691200097uy8rk36FE.jpg" />
				</div>

			</div>
		</div>
	)
})

Flip.displayName = "Flip"

const Index = () => {

	const flipRef = useRef(null)
	const [direction, setDirection] = useState("horizontal")
	return (
		<div>
			<p>
				<a href="https://cssanimation.dev/flipping-images/">来源：翻转图像</a>
			</p>
			<button onClick={() => setDirection(direction === "horizontal" ? "vertical" : "horizontal")}>切换方向</button>
			<button onClick={() => {
				flipRef.current.handleFlip()
			}}>点击按钮或者点击图片开始翻转</button>

			<Flip direction={direction} ref={flipRef} />
		</div>
	)
}

export default Index