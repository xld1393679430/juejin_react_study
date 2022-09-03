import { Button } from "antd";

function useState(value) {
  const getter = () => {

    console.log(value, '---value');
    return value
  };
  const setter = (newValue) => {
    value = newValue;

    console.log(newValue, value, 222);

    return null;
  };

  return [getter, setter];
}

const Index = () => {
  const [count, setCount] = useState(0);

  console.log(count);
  return (
    <div>
      <p>useState</p>
      <Button onClick={() => setCount(1)}>Count累加 count: {count()}</Button>
    </div>
  );
};

export default Index;
