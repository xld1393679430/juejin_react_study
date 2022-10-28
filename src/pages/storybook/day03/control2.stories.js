import React from 'react'
import Control from './Control'

/**
 * 条件控制
 */

export default {
	title: "Day03/Control2",
	component: Control,
	argTypes: {
		number: {
			control: 'number',
			if: { 
				arg: "number",
				truthy: true
			}
		}
	}
}

const Template = (args) => <Control {...args} />

export const Control2 = Template.bind({})
Control2.args = {
	number: 0
}