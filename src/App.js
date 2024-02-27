import React from 'react';
import { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

// LIFT THE STATE UP state xaga sare gee si component badan u isticmaalan components oo ah controlled
class App extends Component {
  state = {
    counters : [
        {id : 1, value : 20 },
        {id : 2, value : 0 },
        {id : 3, value : 0 },
        {id : 4, value : 0 },
        {id : 5, value : 0 }
    ]
};

deleteHandler = (counterId) =>{
    // it handles event from another component to change something to local state 
    // we pass this method in component as attribute value
    console.log("delete handler called and deleted item: ", counterId);
    console.log(this.state.counters.length);

    //  When we want update states on change something we can directly we overrite. we take all elements and change what we want and send back
    const counters = this.state.counters.filter(counter => counter.id !== counterId );
    //this.setState({counters : counters}) ; // first counters is state property that is overriting using as key, and second is const object used as value defained line 25
    this.setState({counters}); // if key and value are same we just write one
};

resetHandler = () =>{
    // this method only reset or change to zero local object or property (value), cant update or change Counter's value in state bc its local storage
    // it (Counter) takes value or data from called component(Counters) first time when run it, after that no updates only local updates
    // to update data in Counter component me change the component to controlled component (means dont have local state it only raise events when it want update and gets data from props)
    const counters = this.state.counters.map( counter => {counter.value=0; return counter;} );
    this.setState({counters})
    console.log(counters);
};

incrementHandler = (counter) =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
};

decrementHandler = (counter) =>{
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    if (counters[index].value >0) counters[index].value--;
    this.setState({counters});
};
  render(){

// two controlled components
    return (
      <>
      <Navbar totalCounters={this.state.counters.filter(counter => counter.value > 0).length}/>
      <main className='container'>

      <Counters onCounters={this.state.counters} onReset={this.resetHandler} onDelete={this.deleteHandler} onIncrement={this.incrementHandler} onDecrement={this.decrementHandler}/>
      </main>
      </>
    );
  };
}

export default App;
