import React, { Component } from "react";
import Restaurant from "../restaurant";
import { accordion } from "../../decorators/accordion";
import { List } from "antd";
import * as PropTypes from "prop-types";

class RestaurantList extends Component {
  componentDidMount() {
    this.props.fetchData && this.props.fetchData();
  }

  render() {
    const {
      restaurants,

      // props from accordion decorator
      openItemId,
      toggleOpenItem
    } = this.props;

    return (
      <List>
        <div>Ваш заказ</div>
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            {...restaurant}
            isMenuOpen={openItemId === restaurant.id}
            toggleOpenMenu={toggleOpenItem}
          />
        ))}
        <div>К оплате: 4000 руб.</div>
      </List>
    );
  }
}

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      menu: PropTypes.array.isRequired,
      reviews: PropTypes.array.isRequired
    })
  ).isRequired,

  openItemId: PropTypes.string,
  toggleOpenItem: PropTypes.func.isRequired
};

export default accordion(RestaurantList);
