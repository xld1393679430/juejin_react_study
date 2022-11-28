import React from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Index = () => {
	const code1 = `
		const car = { branch: 'Audi' };
		const a4 = Object.create(car);
		console.log(a4.branch); // 'Audi'

		delete a4.branch;
		console.log(a4.branch); // 'Audi'
	`

	const code2 = `
		a4.branch = undefined;
		console.log(a4.branch); // undefined
	`

	return (
		<div>
			<h2>1, delete无法删除继承的属性</h2>
			
			<SyntaxHighlighter language="javascript" style={vscDarkPlus}>
				{code1}
			</SyntaxHighlighter>
			
			<div>在这种情况下，我们必须将属性设置为undefined：</div>
			<SyntaxHighlighter language="javascript" style={vscDarkPlus}>
				{code2}
			</SyntaxHighlighter>
		</div>
	)
}

export default Index