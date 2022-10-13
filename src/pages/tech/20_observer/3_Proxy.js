import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const person = new Proxy(
      {
        name: "小明",
        age: 20,
      },
      {
        set(target, key, value) {
          console.log("该属性被修改了");
          target[key] = value;
          return true;
        },
      }
    );

    person.name = "张三";

    console.log("--person--", person, "person.name:", person.name, "person.age:", person.age);
  }, []);

  return (
    <div>
      <p>监听一个普通 JS 对象的变化，我们会用 Object.defineProperty 或者 Proxy：</p>
    </div>
  );
};

export default Index;
