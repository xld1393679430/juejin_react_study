import { Beforeunload } from 'react-beforeunload';
import { Alert } from 'antd'

class Index extends React.Component {
	state = { value: '' };

	render() {
		return (
			<>
				<Alert message="输入非空的情况下刷新页面会有提示（类组件）" type="success" />
				{this.state.value !== '' && (
					<Beforeunload onBeforeunload={(event) => event.preventDefault()} />
				)}
				<input
					onChange={(event) => this.setState({ value: event.target.value })}
					value={this.state.value}
				/>
			</>
		);
	}
}

export default Index