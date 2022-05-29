import React from "react";
import CardList from "./CardList";
import { robots } from './robots';

const App = (props) => {
    return (
        <div>
            <h1>RoboFriends</h1>
            
            <hr/>
            <CardList robots={robots}/>
        </div>
        
    );
}
export default App;