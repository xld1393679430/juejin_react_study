import styled, { createGlobalStyle } from "styled-components";

// createGlobalStyle 样式全局生效
const GlobalStyle = createGlobalStyle`
	.app-title {
		color: red
	}
`

const StyleButton = styled.button`
	color: yellow;
`

const Nav = ({ children }) => {
	return (
		<div>
			<GlobalStyle />
			<p>Nav</p>
			<div>{children}</div>
		</div>
	)
}

const Index = () => {


	return (
		<div>
			<p>Page</p>
			<Nav>
				<p className='app-title'>hello </p>
			</Nav>

			<p className='app-title'>hello2</p>

			<hr />
			<StyleButton>Button</StyleButton>
		</div>
	)
}

export default Index