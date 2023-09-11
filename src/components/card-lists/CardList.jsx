import React, { Component } from 'react'
import "./card-list.style.css";
import Card from '../card/Card';

export default class CardList extends Component {
  render() {
    
    console.log(this.props.monsters);
    console.log("Card  lists components");
    const { monsters } =this.props;

    // console.log(monsters);
    return (
      <div className=' card-list'>
       {
        monsters?.map((mon,index) =>{
           
          return(
            <Card  mon={mon}/> 
          )
        })
       }
      </div>
    )
  }
}
