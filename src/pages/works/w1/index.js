import React, { useState, useEffect } from 'react'
import { Alert } from 'antd'
import ScratchCard from './scratchcard'
import './index.css'

const Index = () => {

	useEffect(() => {
		window.addEventListener('touchmove', function (e) {
			e.preventDefault();
		}, { passive: false });

		new ScratchCard({
			canvas: document.getElementById('canvas'),
			// coverImg: 'scratch-2x.jpg',
			pixelRatio: 2,
			doneCallback: function () {
				console.log('done')
			}
		});

	}, [])

	return (
		<>
			<Alert message="刮刮卡效果" type="success" />
			<div className="card">
				<canvas id="canvas" width="750" height="280"></canvas>
			</div>

		</>

	)
}

export default Index