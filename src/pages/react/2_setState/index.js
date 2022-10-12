import { Component, useState } from "react";

class SetStateClass extends Component {
  state = {
    count: 1,
  };

  handleAdd = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count, "a-1");
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count, "b-1");
    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count, "c-2");
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count, "d-2");
    }, 0);
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count} - 3</p>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

class SetStateClass2 extends Component {
  state = {
    count: 1,
  };

  handleAdd = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
    console.log(this.state.count, "a-1");
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
    console.log(this.state.count, "b-1");
    setTimeout(() => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
      console.log(this.state.count, "c-3");
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
      console.log(this.state.count, "d-3");
    }, 0);
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count} - 5</p>
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

const FunSetState = () => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
    console.log(count, "a");
    setCount(count + 1);
    console.log(count, "b");
    setTimeout(() => {
      setCount(count + 1);
      console.log(count, "c");
      setCount(count + 1);
      console.log(count, "d");
    }, 0);
  };

  return (
    <div>
      <p>Count: {count} - 2</p>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

const FunSetState2 = () => {
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount((count) => count + 1);
    console.log(count, "a-1");
    setCount((count) => count + 1);
    console.log(count, "b-2");
    setTimeout(() => {
      setCount((count) => count + 1);
      console.log(count, "c-3");
      setCount((count) => count + 1);
      console.log(count, "d-4");
    }, 0);
  };

  return (
    <div>
      <p>Count: {count} - 5</p>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

const Index = () => {
  return (
    <div>
      <p>类组件的setState -- 参数是对象的方式</p>
      <SetStateClass />

      <hr />
      <p>类组件的setState2 -- 参数是函数的方式</p>
      <SetStateClass2 />

      <hr />

      <p>函数组件的setState -- </p>
      <FunSetState />

      <hr />
      <p>函数组件的setState2 -- 参数是函数的方式</p>
      <FunSetState2 />
    </div>
  );
};

export default Index;
