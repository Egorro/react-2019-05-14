import React, { Component } from "react";
import { List } from "antd";

class Order extends Component {
  render() {
    const { dish, count } = this.props;
    return (
      <List.Item>
        <div>
          {dish.name}, {count} шт.
        </div>
      </List.Item>
    );
  }
}

export default Order;
