import React from "react";
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import Scroll from "../Components/Scroll";
import { Component, useState, useEffect } from "react";

function App() {
    //constructor(){
    //    super()
    //    this.state = {
    //        robots: [],
    //        searchfield: ''
    //    }
    //}

    //componentDidMount(){
    //    fetch('https://jsonplaceholder.typicode.com/users')
    //    .then(response => response.json())
    //    .then(users => {this.setState({robots: users})});
    //}

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchFieldText] = useState("");

    const onSearchChange = (event) => {
        setSearchFieldText(event.target.value);
    }

    //const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    if (!robots.length) { 
        return(
            <div>
                <h1 className="tc white f1">Loading...</h1>
            </div>)
    }
    return (
        <div className='tc'>
            <h1 className="white f1">RoboFriends</h1>
            <div>
                <h3 className="white" style={{marginTop: '-20px'}}>Made by: Sebastian Loucim</h3>
            </div>
            <SearchBox searchChange={onSearchChange}/>
            <hr/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
        
    );
}
export default App;