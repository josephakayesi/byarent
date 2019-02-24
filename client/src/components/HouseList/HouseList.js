import React, { Component } from 'react'
import House from '../House/House'

class HouseList extends Component {
  render() {
    return (
      <div>
        {this.props.houses.map((house, index) => {
          console.log(index)
          return (
              <House
                key={index}
                name={house.name}
                description={house.description.split("", 72)}
                image={house.image}
              />
          )
        })}
      </div>
    )
  }
}

export default HouseList
