import React from 'react';
import { Component } from 'react';
import Counter from './counter';



// COMPASING COMPONENTS
// class Counters extends Component{
//     state = {
//         counters : [
//             {id : 1, value : 20 },
//             {id : 2, value : 0 },
//             {id : 3, value : 0 },
//             {id : 4, value : 0 },
//             {id : 5, value : 0 }
//         ]
//     };

//     deleteHandler = (counterId) =>{
//         // it handles event from another component to change something to local state 
//         // we pass this method in component as attribute value
//         console.log("delete handler called and deleted item: ", counterId);
//         console.log(this.state.counters.length);

//         //  When we want update states on change something we can directly we overrite. we take all elements and change what we want and send back
//         const counters = this.state.counters.filter(counter => counter.id !== counterId );
//         //this.setState({counters : counters}) ; // first counters is state property that is overriting using as key, and second is const object used as value defained line 25
//         this.setState({counters}); // if key and value are same we just write one
//     };

//     resetHandler = () =>{
//         // this method only reset or change to zero local object or property (value), cant update or change Counter's value in state bc its local storage
//         // it (Counter) takes value or data from called component(Counters) first time when run it, after that no updates only local updates
//         // to update data in Counter component me change the component to controlled component (means dont have local state it only raise events when it want update and gets data from props)
//         const counters = this.state.counters.map( counter => {counter.value=0; return counter;} );
//         this.setState({counters})
//         console.log(counters);
//     };

//     incrementHandler = (counter) =>{
//         const counters = [...this.state.counters];
//         const index = counters.indexOf(counter);
//         counters[index] = {...counter};
//         counters[index].value++;
//         this.setState({counters});
//     };

//     render(){
//         return(
//             <div>
//                 {/* // COMPASING COMPONENTS */}
//                 {/* Passing data to the components key is not one of them */}
//             {/*{this.state.counters.map( counter => <Counter key={counter.id} value={counter.value} selected/>)} */}  {/* selected same as selectd={true}, default is true */}
//             {/*{this.state.counters.map( counter => <Counter key={counter.id} value={counter.value} ><h1>Counter # {counter.id}</h1></Counter>)} */}  {/* what inside openning and closing tabs of component is called children, and they include props property (props.children), use case some times dialog box*/}
//            {/*{this.state.counters.map( counter => <Counter key={counter.id} value={counter.value} id = {counter.id}>{/*<h1>Counter # {counter.id}</h1>/}</Counter>)}  */}
//            {/* {this.state.counters.map( counter => <Counter key={counter.id} value={counter.value} onDelete={this.deleteHandler} id = {counter.id}></Counter>)} */} {/* passing method as attribute value or props and will invoke inside this component using its attribute name(this.props.onDelete)*/}

//             <button className="btn btn-success btn-lg m-2" onClick={this.resetHandler}>Reset</button>
//               {/*why we use key and id bc they are same the reasing we use key and id is key only used or access inside current component to access unique value of element we use id attribute
//              also we can pass object it self (counter), we dont need more attribute that is messy ugly, bc they have relate value (same object), if we pass object we dont need every time we add new property in object in state to update here */}
//              {(this.state.counters.length === 0? <h2>No Counters!</h2> : <>{this.state.counters.map( counter => <Counter key={counter.id} counter={counter} onDelete={this.deleteHandler} onIncrement={this.incrementHandler}></Counter>)}</>)}
//             {/* <Counter/>
//             <Counter/>
//             <Counter/>
//             <Counter/> */}
//             </div>

//         );
//     }
// }

// export default Counters;



class Counters extends Component{
    render(){
        return(
            <>
            <button className="btn btn-success btn-lg m-2" onClick={this.props.onReset}>Reset</button>

             {(this.props.onCounters.length === 0? <h2>No Counters!</h2> : <>{this.props.onCounters.map( counter => <Counter key={counter.id} counter={counter} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement}></Counter>)}</>)}

            </>
        );
    };
}

export default Counters;