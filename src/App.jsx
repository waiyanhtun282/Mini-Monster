import React, { Component } from "react";
import CardList from "./components/card-lists/CardList";
import SearchBox from "./components/searchbox/SearchBox";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    // console.log("constructor");
  }

  componentDidMount() {
    // console.log("componeny Did Mount");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          
        )
      );
  }
  
  onSearchChange =(e) =>{
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() =>{
      return {searchField}
    })
  }

  
  render() {
    const {monsters ,searchField} =this.state;
    const {onSearchChange} =this;
    // console.log("render");
    const filterMonsters = this.state.monsters.filter((monster) => {
      return monster.title.toLocaleLowerCase().includes(searchField);
    });
    return ( 
      <div>
       <SearchBox onChangeHandler={onSearchChange} className="monster-search-box" placeholder="serach monsters"/>
  

        <CardList  monsters={filterMonsters}/>
      </div>
    );
  }
}
