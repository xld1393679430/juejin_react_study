import { Button } from "antd";

function useState(value) {
  const getter = () => {
    return value
  };
  const setter = (newValue) => {
    value = newValue;

    return null;
  };

  return [getter, setter];
}

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>useState</p>
      <Button onClick={() => setCount(1)}>Count累加 count: {count()}</Button>
    </div>
  );
};

export default Index;
