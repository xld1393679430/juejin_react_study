import JoyRide from "react-joyride";

const steps = [
	{
		target: '.first-tour',
		content: 'This is the content for the first tour.',
	},
	{
		target: '.second-tour',
		content: 'Here is the content for the second Tour.',
	}
]

const Index = () => {

	return (
		<>
			<div className='first-tour'>first-tour</div>

			<hr />
			<div className='second-tour'>second-tour</div>

			<JoyRide
				steps={steps}
				continuous={true}
				showSkipButton={true}
				styles={{
					tooltipContainer: {
						textAlign: "left"
					},
					buttonNext: {
						backgroundColor: "green"
					},
					buttonBack: {
						marginRight: 10
					}
				}}
				locale={{
					last: "End tour",
					skip: "Close tour"
				}}
			/>
		</>
	)
}

export default Index