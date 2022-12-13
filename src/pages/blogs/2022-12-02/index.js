import React, { Fragment, useEffect } from "react";
import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {
  const code = `
	 1, 对象只接受字符串和符号键。其他类型将自动转换为字符串。Map另一方面接受任何类型的密钥。
	 2,我们可以迭代Map直接使用forEachorfor ... of语句的属性：
		const styles = new Map();
		styles.set('color', 'blue');
		styles.set('fontSize', '12px');
		
		styles.forEach((value, key) => console.log(key, '=', value));
		
		// Output:
		// color = blue
		// fontSize = 12px

		对象不能直接迭代。为了遍历对象的属性，我们必须使用Object.keys,Object.values或Object.entries来接收键、值或键和值对的列表。
	 3,对象具有特殊属性，例如constructor、__proto__等。
		let person = {};
		person['constructor']; // ƒ Object() { [native code] }

		虽然Map只包含我们定义的内容：
		let person = new Map();
		person.get('constructor'); // undefined
	4, JSON 支持Object：
		const person = {};
		person.name = 'Foo';
		person.age = 20;
		
		JSON.stringify(person); // "{"name":"Foo","age":20}"
		使用Map，在使用 JSON 序列化时无法获取正确的数据：
		const person = new Map();
		person.set('name', 'Foo');
		person.set('age', 20);

		JSON.stringify(person); // "{}"
	`;

  const code2 = `
		JSON.stringify({
			name: 'John',
			address: null,
			age: undefined,
		});	
		// {"name":"John","address":null}
	`;

  return (
    <div>
	  <Alert message="1，Map和Object差异" type="success"></Alert>
      <Code tab={true}>{code}</Code>

      <hr />
	  <Alert message="2，JSON.stringify省略undefined，但保留null：" type="success"></Alert>
      <Code>{code2}</Code>

      {"奥术大师大所大 \n 222".split("\\n").map((item, index) => {
        return (
          <Fragment key={index}>
            {item}
            <br />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Index;
