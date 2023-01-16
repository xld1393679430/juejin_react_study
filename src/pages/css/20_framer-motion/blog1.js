import React, { useState, useEffect } from 'react'
import { Alert, Divider } from 'antd'
import { motion } from 'framer-motion';

const H1Variants = {
	initial: { x: -1000 },
	animate: { x: 0 },
	transition: {
		type: "tween",
		duration: 2,
		delay: 1
	}
};

const Index = () => {

	return (
		<div>
			<Alert message="1, h1加载时向右滑动 12px 并向上移动 12px" type="success"></Alert>
			<motion.h1
				animate={{ x: 12, y: -12 }}>
				This is a motion component
			</motion.h1>

			<Divider />

			<Alert message="2，animate属性用于定义组件在挂载时的行为，而initial属性是在挂载前定义它们的行为" type="success"></Alert>
			<motion.h1
				initial={{ x: -1000 }}
				animate={{ x: 20 }}>
				This is a motion component
			</motion.h1>

			<Divider />

			<Alert message="3，transition允许我们定义动画的发生方式。有了它，我们定义了值如何从一种状态动画到另一种状态。除其他事项外，我们可以使用此道具定义动画的duration、delay和type" type="success"></Alert>
			<motion.h1
				initial={{ x: -1000 }}
				animate={{ x: 0 }}
				transition={{
					type: "tween",
					duration: "1",
				}}>
				This is a motion component
			</motion.h1>

			<Divider />

			<Alert message="4，同时为多个运动组件设置动画" type="success"></Alert>
			<div>
				<motion.h1
					initial={{ x: -1000 }}
					animate={{ x: 0 }}
					transition={{
						type: "tween",
						duration: "2",
						delay: "1"
					}}>
					This is a motion h1
				</motion.h1>
				<motion.h2
					initial={{ y: -1000 }}
					animate={{ y: 0 }}
					transition={{
						type: "tween",
						duration: "1",
						delay: ".4"
					}}>This is a motion h2
				</motion.h2>
				<motion.h3
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}>
					This is a motion h3
				</motion.h3>
			</div>

			<Divider />

			<Alert message="5，将这些定义提取到独立的变体对象中" type="success"></Alert>
			<motion.h1
				variants={H1Variants}
				initial='initial'
				animate='animate'
			>
				This is a motion h1
			</motion.h1>

		</div>
	)
}

export default Index