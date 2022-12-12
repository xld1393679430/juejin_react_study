import React, { useState, useEffect } from 'react'

const Theme = {
    DEFAULT: 'Default',
    LIGHT: 'Light',
    DARK: 'Dark',
} as const;

type Theme1 = typeof Theme[keyof typeof Theme];

type Theme2 = keyof typeof Theme

const Index = () => {

	useEffect(() => {

		function handleKeydown(event) {
			console.log(event)
		}
		document.addEventListener('keydown', handleKeydown)
		return () => {
			document.removeEventListener('keydown', handleKeydown)
		}
	}, [])

	return (
		<div>
			<p>Page</p>
		</div>
	)
}

export default Index