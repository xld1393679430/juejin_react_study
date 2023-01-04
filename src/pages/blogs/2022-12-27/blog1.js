import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
	const code = `
		function Person(name, age) {
			this.name = name;
			this.age = age;
		}

		function f1(person) { 
			// var person = p; // 函数的形参相当于在函数内部重新开辟了一个变量指向原来的堆内存地址
			person.name = "s2";
			person = new Person("aa", 18)
		}

		var p = new Person("s1", 1)
		console.log(p.name); // s1

		f1(p)
		console.log(p.name); // s2
	`

	return (
		<>
			<Alert message="1，函数的形参" type="success"></Alert>
			<Code tab>{code}</Code>
		</>
	)
}

export default Index