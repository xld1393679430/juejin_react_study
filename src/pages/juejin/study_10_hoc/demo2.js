import React from "react";

// 修改渲染树

class Son extends React.Component {
  render() {
    return (
      <ul>
        <li>Vue</li>
        <li>React</li>
        <li>Angular</li>
      </ul>
    );
  }
}

function HOC(Component) {
  return class Wrapper extends Component {
    render() {
      const element = super.render();

      const otherProps = {
        name: "alien",
      };
      /* 替换 Angular 元素节点 */
      const appendElement = React.createElement("li", {}, `hello ,world , my name  is ${otherProps.name}`);

      const newChild = React.Children.map(element.props.children, (child, index) => {
        if (index === 2) {
          return appendElement;
        }
        return child;
      });

      return React.cloneElement(element, element.props, newChild);
    }
  };
}

export default HOC(Son);

export const code = `
import React from "react";

// 修改渲染树

class Son extends React.Component {
  render() {
    return (
      <ul>
        <li>Vue</li>
        <li>React</li>
        <li>Angular</li>
      </ul>
    );
  }
}

function HOC(Component) {
  return class Wrapper extends Component {
    render() {
      const element = super.render();

      const otherProps = {
        name: "alien",
      };
      const appendElement = React.createElement("li", {}, 'hello ,world , my name  is \${otherProps.name}');

      const newChild = React.Children.map(element.props.children, (child, index) => {
        if (index === 2) {
          return appendElement;
        }
        return child;
      });

      return React.cloneElement(element, element.props, newChild);
    }
  };
}

export default HOC(Son);

`
