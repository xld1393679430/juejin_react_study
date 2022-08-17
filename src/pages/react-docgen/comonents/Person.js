import React, { Component } from "react";
import PropTypes from "prop-types";

class Person extends Component {
  handleSleep = (name) => {
    this.props.sleep?.();
  };

  render() {
    const { name, hobbies } = this.props;
    return (
      <div>
        <p>姓名：{name}</p>
        <p>爱好：{hobbies.join("/")}</p>
        <button onClick={this.handleSleep.bind(this, name)}>睡觉</button>
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  hobbies: PropTypes.array,
  /**
   * @text 睡觉的事件回调
   * @category event
   */
  sleep: PropTypes.func,
};

Person.defaultProps = {
  name: "张三",
  hobbies: ["睡觉", "游戏"],
};

export default Person;
