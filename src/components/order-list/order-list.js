import React from "react";
import { List } from "antd";
import { connect } from "react-redux";
import Order from "../order";

function OrderList(props) {
  const { orders, restaurants } = props;
  const allDishes = restaurants.reduce(
    (dishes, restaurant) => [...dishes, ...restaurant.menu],
    []
  );
  return (
    <List>
      {orders.map(order => (
        <Order
          key={order.id}
          dish={allDishes.find(({ id }) => id === order.id)}
          count={order.value}
        />
      ))}
    </List>
  );
}

export default connect(store => {
  return {
    orders: Object.keys(store.cart).map(dishId => ({
      id: dishId,
      value: store.cart[dishId]
    })),
    restaurants: store.restaurants
  };
})(OrderList);
