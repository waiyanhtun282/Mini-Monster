import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const {id,title} =this.props.mon;

    return (
        <div className=' card-container' key={id}>
        <img src={`https://robohash.org/1?${id}=set2&size=180x180`} alt={`monster ${title}`} />
        <p>{title}</p>
        </div>
    )
  }
}
