import React, { Component } from 'react'

export default class House extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={houseStyle}>
      
      </div>
    )
  }
}

const houseStyle = {
  height: 180,
  margin: 20,
  borderRadius: 5,
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}
