import React from 'react';
import ReactDOM from 'react-dom';
import List from './list'


export default class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', cards:[]};

        this.onAddInputChanged = this.onAddInputChanged.bind(this);
        this.onAddSubmit = this.onAddSubmit.bind(this); 
    }

    onAddInputChanged(input) {
        this.setState({value: input});
    }

    onAddSubmit(event) {
        console.log('a name was submit' + this.state.value);
        var cards = this.state.cards.concat(this.state.value.value);
        this.setState({cards: cards});
        event.preventDefault();
    }

    render() {
        return (
        <div>
            <List cards={this.state.cards} onAddInputChanged={this.onAddInputChanged} 
            onAddSubmit={this.onAddSubmit}/>
        </div>
        ); 
    }
}

    


