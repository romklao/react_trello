import React from 'react';
import Card from './card';

export default function List(props)  {

    var card_list = props.cards.map(function(card, index) {
        return (<Card text={card} key={index}/>)
    })
    return (
        <div className="card-list">
            <div className="card-list-name">{props.name}</div>
            {card_list}
            <form onSubmit={props.onAddSubmit}>
                <input type="text" ref={element => props.onAddInputChanged(element)}/>
                <input type="submit" value="Submit" />
            </form> 
        </div>
    );

}













