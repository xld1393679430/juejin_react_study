import "./index.css"

const Loading = () => {
	return (
		<div className="loading-spinner"></div>
	)
}

const Index = () => {

	return (
		<div>
			<p>
				<a href="https://cssanimation.dev/loading-spinner/">来源：Loading</a>
			</p>
			<div>
				<Loading />
			</div>
		</div>
	)
}

export default Index