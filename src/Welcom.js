import React,{Component} from 'react';

class Welcom extends Component {
constructor(){
    super();
    this.state = {
        count:0
    }
}

//fonction removeOne pour enlever 1
    removeOne(){
        this.setState({
            count: this.state.count - 1
        });
    }

//fonction addOne pour ajouter 1
    addOne(){
        this.setState({
            count: this.state.count + 1
        });
    }

    render(){ 
        return (
            <div>
                <h1>Welcom {this.props.name} sur ma 1er fois en react 😊</h1>
                <p>mon compteur : {this.state.count} </p>
                <button onClick={() =>this.addOne()}>Click pour ajouter</button>
                <button onClick={this.removeOne.bind(this)}>Click pour enlever</button>

            </div>
        );
    } 
}

export default Welcom;