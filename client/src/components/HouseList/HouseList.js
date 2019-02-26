import React, { Component } from 'react'
import House from '../House/House'

class HouseList extends Component {
  render() {
    return (
      <div>
        {this.props.houses.map((house, index) => {
          return (
              <House
                key={index}
                id={index}
                name={house.name}
                description={house.description.split("", 72)}
                price={house.price}
                image={house.image}
                addItemToCart={this.props.addItemToCart}
              />
          )
        })}
      </div>
    )
  }
}

export default HouseList
