import React, { useState, useEffect } from 'react'
import Switch1 from './switch1'
import Switch2 from './switch2'

const Index = () => {

	return (
		<div>
			<p>
				<a href="https://cssanimation.dev/radio-switch/">来源：Switch</a>
			</p>
			<div>
				<Switch1 />
				<hr />
				<Switch2 />
			</div>
		</div>
	)
}

export default Index