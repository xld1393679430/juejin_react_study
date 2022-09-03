import { Map } from "immutable";
import { Button } from "antd";

const Index = () => {
  const testDemo1 = () => {
    let obj1 = Map({ name: "aa" });
    let obj2 = obj1.set("name", "李四");
    console.log(obj1.get("name"), obj2.get("name"));
  };

  const testDemo2 = () => {
    let obj1 = Map({
      name: "a",
      age: Map({ age: 10 }),
    });

    let obj2 = obj1.set("name", "bbb");
    // 上面 obj1 和 obj2 共享了没有变化的 filter 属性
    console.log(obj1.get("age"), obj2.get("age"), obj1.get("age") === obj2.get("age"));
  };

  return (
    <div>
      <p>Immutable</p>
      <hr />
      <p>降低复杂度，避免副作用</p>
      <Button onClick={testDemo1}>testDemo1</Button>
      <hr />
      <p>Immutable 采用了结构共享机制，所以会尽量复用内存</p>
      <Button onClick={testDemo2}>testDemo2</Button>
      <hr />
    </div>
  );
};

export default Index;
