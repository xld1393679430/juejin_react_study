import { useCallback, useEffect } from "react";
import { Button, message } from "antd";
class Dog {
  name = "小黑";
  _sex = 1;
}

const handler = {
  get(target, prop) {
    if (prop.startsWith("_")) {
      return;
    }
    return target[prop];
  },
  set(target, prop, value) {
    if (prop.startsWith("_")) {
      return;
    }
    target[prop] = value;
  },
  ownKeys(target, prop) {
    console.log(target)
    return Object.keys(target).filter((key) => {
      console.log(key, '--key')
      return !key.startsWith("_")
    });
  },
};

const dog = new Dog()
const proxy_dog = new Proxy(dog, handler);

const Index = () => {
  const handleClick1 = useCallback(() => {
    message.info(`dog1._sex === undefined ? ${proxy_dog._sex === undefined} : ''`);
  }, []);

  const handleClick2 = useCallback(() => {
    let str = ''
    for (const key of Object.keys(proxy_dog)) {
        console.log(key, proxy_dog[key])
        str += `key: ${key};`
    }
    message.info(str);
  }, []);

  return (
    <div>
      <p>1，通过Proxy 来约束下 get、set、getKeys</p>
      <Button onClick={handleClick1}>点击查看：访问私有属性返回undefined</Button>
      <Button onClick={handleClick2}>点击查看：过滤掉目标对象中下划线开头的属性</Button>
    </div>
  );
};

export default Index;
