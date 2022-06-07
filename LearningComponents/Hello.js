import React from "react";
import './Hello.css'

class Hello extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello World!</h1>
                <p>{this.props.textPayload}</p>
            </div>
        );
    }
}

/*const HelloFunction = (props) => {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>{props.textPayload}</p>
        </div>        
    );
}*/

//arrow function, made Constant, 
/* Function = (Parameters) => {
    DoSomething();
    if (something == somethingElse){
        return;
    } else {
        return(
            thing1,
            thing2,
        );
    }
}
*/

export default Hello;
//export default HelloFunction
//Would work aswell!!!