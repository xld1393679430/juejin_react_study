import React, { Children, cloneElement, createElement } from "react";

const BREAD_CRUMBITEM = 'BreadcrumbItem'

function Breadcrumbs({ children }) {
	const arrayChildren = Children.toArray(children).reduce((prev, next) => {
		// 匹配React.Fragment标签
		if (next.type.toString() === Symbol('react.fragment').toString()) {
			return prev.concat(next.props.children);
		}
		return prev.concat(next);
	}, []).filter(child => {
		// 过滤不是BreadcrumbItem的子组件
		return child?.type?.displayName === BREAD_CRUMBITEM
	});

	return (
		<ul style={{
			listStyle: "none",
			display: "flex"
		}}>
			{Children.map(arrayChildren, (child, index) => {
				const isLast = index === arrayChildren.length - 1;

				const { children, link } = child.props;

				return (
					<>
						{link ? (
							<a href={link}
								style={{
									display: "inline-block",
									textDecoration: "none"
								}} >
								<div style={{ marginRight: "5px" }}>
									{cloneElement(child, {
										isLast,
									})}
								</div>
							</a>
						) : (
							<div style={{ marginRight: "5px" }}>
								{cloneElement(child, {
									isLast,
								})}
							</div>
						)}

						{!isLast && <div style={{ marginRight: "5px" }}> {">"} </div>}
					</>
				);
			})}
		</ul>
	);
}

function BreadcrumbItem({ isLast, children, ...rest }) {
	return (
		<li style={{
			color: isLast ? "black" : "blue"
		}}
			{...rest}
		>
			{children}
		</li>
	);
}

BreadcrumbItem.displayName = BREAD_CRUMBITEM

export default function ToArray() {
	return (
		<Breadcrumbs>
			<BreadcrumbItem link="https://goibibo.com/" data-name="1">Goibibo</BreadcrumbItem>
			<>
				<div>33</div>
				111
				<BreadcrumbItem link="https://goibibo.com/hotels/">Hotels</BreadcrumbItem>
				<BreadcrumbItem>A Fancy Hotel Name</BreadcrumbItem>
				<div>11</div> 
			</>
			<div>22</div>
		</Breadcrumbs>
	);
}

