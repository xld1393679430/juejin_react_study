import React, { useState, useEffect } from 'react'
import { Alert, Button } from 'antd'
import Code from '@/components/Code'
import { func } from 'prop-types'

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

	const handleDownload = () => {
		function download(data, name) {
			const a = document.createElement("a")
			const result = data.map(item => {
				return Object.values(item).join("\t")
			}).join("\n")

			console.log(result)
			a.href = URL.createObjectURL(new Blob([result, { type: "text/csv" }]))
			a.setAttribute("download", name)
			a.click()
		}

		download([
			{ id: "ID", name: "姓名", age: "年龄" },
			{ id: "1", name: "张三", age: "11" },
			{ id: "2", name: "李四", age: "12" },
			{ id: "3", name: "王五", age: "131" }
		], "用户信息.csv")

	}

	return (
		<>
			<Alert message="1，函数的形参" type="success"></Alert>
			<Button onClick={handleDownload}>下载Excel</Button>
			<Code tab>{code}</Code>
		</>
	)
}

export default Index