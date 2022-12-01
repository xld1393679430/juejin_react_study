import React, { useState, useEffect } from 'react'

function fetchData({ id }) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.5) {
				resolve({
					useId: id,
					useName: "张三"
				})
			} else {
				reject({
					code: 100,
					message: "请求错误"
				})
			}
		}, 1000)
	})
}

const Fetch = ({ method, id, children: Component }) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		async function getPageData() {
			setLoading(true)
			try {
				const result = await fetchData({ id })
				setData(result)
			} catch (error) {
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		getPageData()
	}, [])

	return <Component data={data} error={error} loading={loading} />
}

const Index = () => {

	return (
		<Fetch method="user.getById" id={1}>
			{({ data, error, loading }) => {
				if (loading) {
					return "Loading"
				} else if (error) {
					return "Error"
				} else {
					return "Data"
				}

			}}
		</Fetch>
	)
}

export default Index