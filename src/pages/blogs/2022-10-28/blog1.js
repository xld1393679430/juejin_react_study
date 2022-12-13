import React from "react";
import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
  const code1 = `
		const car = { branch: 'Audi' };
		const a4 = Object.create(car);
		console.log(a4.branch); // 'Audi'

		delete a4.branch;
		console.log(a4.branch); // 'Audi'
	`;

  const code2 = `
		a4.branch = undefined;
		console.log(a4.branch); // undefined
	`;

  return (
    <div>
      <Alert message="1, delete无法删除继承的属性" type="success"></Alert>
      <Code tab={true}>{code1}</Code>

      <Alert message="在这种情况下，我们必须将属性设置为undefined：" type="warning"></Alert>
      <Code tab={true}>{code2}</Code>
    </div>
  );
};

export default Index;
