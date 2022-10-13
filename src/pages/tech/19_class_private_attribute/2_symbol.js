import { message, Button } from "antd";
import { useCallback } from "react";

/**
 * 这种私有属性是真的没法访问么？
 * 有一个 api 叫做 Object.getOwnPropertySymbols，可以取到对象的所有 Symbols 属性，然后就可以拿到属性值了：
 */
const sexSymbol = Symbol('sex') 
const ageSymbol = Symbol('age')

class Dog {
    constructor() {
        this.name = '小黑'
        this[sexSymbol] = '1'
        this[ageSymbol] = 10
    }

    // 也可以通过get 暴露私有属性
    get age() {
        return this[ageSymbol]
    }
}

const dog = new Dog()

const Index = () => {

    const handleClick1 = useCallback(() => {
        message.info(Object.keys(dog))
    }, [])

    const handleClick2 = useCallback(() => {
        message.info(dog.age)
    }, [])

  return (
    <div>
      <p>2，我们不再用 name 和 age 作为私有属性名了，而是用 Symbol 生成唯一的值来作为名字。这样外面因为拿不到属性名，就没法取到对应的属性值</p>
      <Button onClick={handleClick1}>点击查看Dog类上的属性</Button>
      <Button onClick={handleClick2}>点击查看Dog类上的暴露的私有属性</Button>
    </div>
  );
};

export default Index