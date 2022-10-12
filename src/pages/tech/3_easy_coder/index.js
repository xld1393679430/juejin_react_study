import React, { useState, memo } from "react";
import { Button, Collapse, Row, Col, Input, Radio, Rate } from "antd";

const { Panel } = Collapse;

const Index = () => {
  return (
    <Row style={{ height: 600 }}>
      <Col span={5} style={{ background: "skyblue" }}>
        <Row gutter={[8, 8]}>
          <Col span={24}>
            <i className="iconfont">&#xe600;</i>
          </Col>
          <Col span={24}>
            <Radio /> 单选框
          </Col>
          <Col span={24}>
            <Rate /> 评分
          </Col>
          <Col span={24}>
            <Button>按钮</Button>
          </Col>
        </Row>
      </Col>
      <Col span={19}>
        <Button>2</Button>
      </Col>
    </Row>
  );
};

export default memo(Index);
