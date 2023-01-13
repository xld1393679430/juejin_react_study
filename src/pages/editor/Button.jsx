import React from 'react'

const Button = ({ title, isActive, onClick }) => {
	return (
		<div>
			<button
				style={{
					maxWidth: "140px",
					minWidth: "80px",
					height: "30px",
					marginRight: "5px",
					backgroundColor: isActive ? "lightcyan" : "transparent"
				}}
				onClick={onClick}
			>{title}</button>
		</div>
	)
}

export default Button