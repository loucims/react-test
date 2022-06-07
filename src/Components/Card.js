import React from "react";
import './Card.css'

const Card = (props) => {
    //Or put the paremeters deestructured already on the "props" place
    const {id, name, email} = props;
    return(
        <div className="bg-gray dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt='Robot'/>
            <div >
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;