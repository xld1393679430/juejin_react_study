function testRender(element, container) {
  const node = document.createElement(element.type);

  node["title"] = element.props.title;

  const text = document.createTextNode("");

  text["nodeValue"] = element.props.children;

  node.appendChild(text);

  container.appendChild(node);
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        if (typeof child === "object") {
          return child;
        }
        return createTextElement(child);
      }),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function render(element, container) {
  const dom = element.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type);

    console.log('====================================');
    console.log(typeof element.props.children);
    console.log('====================================');

  element.props.children?.forEach?.((child) => {
    render(child, dom);
  });

  const isProperty = (key) => key !== "children";

  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom["name"] = element.props[name];
    });

  container.appendChild(dom);
}

const myReact = {
  createElement,
  render,
};

export { myReact };
