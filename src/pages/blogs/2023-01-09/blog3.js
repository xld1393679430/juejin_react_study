import axios from 'axios'
import React, { useState, useEffect } from 'react'

const getData1 = () => {
	return Promise.resolve("aaa")
}

const getData2 = () => {
	return Promise.reject(new Error("错误"))
}

const url = 'https://api.github.com/users/hacktivist123/repos'

const List = ({ repos }) => {
	if (!repos || !repos.length) {
		return
	}

	return (
		<ul>
			{repos.map((item) => <li key={item.id}>{item.name}</li>)}
		</ul>
	)
}

const WithLoadingList = (Component) => {
	return function WithLoadingComponent({ isLoading, ...rest }) {
		console.log(isLoading, rest, 1111);

		if (isLoading) {
			return (
				<p style={{ textAlign: 'center', fontSize: '30px' }}>
					Hold on, fetching data may take some time :)
				</p>
			)
		}
		return (
			<Component {...rest} />
		)
	}
}

const LoadingList = WithLoadingList(List)

const Index = () => {
	const [state, setState] = useState({
		isLoading: false,
		repos: null
	})

	// useEffect(() => {
	// 	setState({
	// 		...state,
	// 		isLoading: true,
	// 	})

	// 	fetch(url).then(res => res.json()).then(repos => {
	// 		setState({
	// 			repos,
	// 			isLoading: false,
	// 		})
	// 	})

	// 	return () => {
	// 		setState({
	// 			repos: null,
	// 			isLoading: false,
	// 		})
	// 	}
	// }, [])

	useEffect(() => {
		axios.all([
			getData1(),
			getData2(),
		]).then(res => {
			console.log(res, 1111);
		}).catch(err => {
			console.log(err, 2222);
		})
	}, [])

	return (
		<div>
			{/* <LoadingList {...state} /> */}
		</div>
	)
}

export default Index