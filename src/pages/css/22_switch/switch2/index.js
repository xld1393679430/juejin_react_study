import React, { useRef, useEffect } from 'react'
import "./index.css"

const Index = () => {
	const checkboxRef = useRef(null)
	const switchRef = useRef(null)

	useEffect(() => {
		const handleChange = (e) => {
			const isChecked = e.target.checked;
			if (isChecked) {
				switchRef.current.classList.remove('switch--off');
				switchRef.current.classList.add('switch--on');
			} else {
				switchRef.current.classList.remove('switch--on');
				switchRef.current.classList.add('switch--off');
			}
		}
		checkboxRef.current.addEventListener('change', handleChange);
		return () => {
			checkboxRef.current.removeEventListener('change', handleChange);

		}
	}, [])

	return (
		<label className="switch" ref={switchRef}>
			<input type="checkbox" className="switch__input" ref={checkboxRef} />
			<div className="switch__circle"></div>
		</label>
	)
}

export default Index