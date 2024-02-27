import React from "react";
import { Component } from "react";


// class Counter extends Component{
//     // property of component, and its object that hold all data that component needs
//     // and it can be object inside another object (all data )

//     state = {
//         // count: 0,
//         // ImageUrl: 'https://picsum.photos/200'
//         // tags : [],
//         //value : this.props.value // Every component has property called props, and its js object that includes all sets of attributes passing components when using another components
//         value : this.props.counter.value // using object and it properties
//     };
//     // adding style using style object
//     // style = {
//     //     fontSize: 20,
//     //     fontWeight: 'bold',
//     //     color : 'blue'
//     // };

//     //helper method
//     // renderTags(){
//     //     if (this.state.tags.length === 0) return <p>There is no tags!</p>;
//     //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> // each item should have uniqeu id to react know which item deleted or updated
        
//     // }

//     // handlerIncrement(){
//     //     console.log("increment",this); // 'this' is undefined when we call in this(current) mwthod 
//     //     /// The reason why 'this' is undefined when you call it in an event handler method is because the value of 'this' depends on how the function is invoked, 
//     //     //not how it is defined. When you pass a function reference as an event handler, such as onClick={this.handlerIncrement}, 
//     //     //the function is called without a receiver object, so 'this' is set to the global object (window) or undefined in strict mode. 
//     //     //To fix this, you have to bind the function to the correct 'this' value, either by using an arrow function, such as onClick={() => this.handlerIncrement()}, 
//     //     //or by using the bind method, such as onClick={this.handlerIncrement.bind(this)}
//     //      //One of the differences is that arrow functions do not have their own this binding, meaning they inherit the value of this from the enclosing scope.
//     // }

//     handlerIncrement = () =>{
//         console.log("increment", this);

//         // UPDATING STATES: we use method from component class
//         this.setState({value: this.state.value + 1}); // it overrides count property and update or adds if not exists
//         // react creates new virtual DOM tree, and compare old virtual DOM, then it only changes element(s) that have changed

//     };
  
//     // { () => this.handlerIncrement()} it same as method inside another method, then inside that method call handlerIncrement. this is easyer then and simple

//     // WITH Paramater
//     // handlerIncrement = (product) =>{
//     //     console.log("increment", this);
//     //     console.log("increment", product+1);

//     //     // UPDATING STATES: we use method from component class
//     //     this.setState({count: this.state.count + 1}); // it overrides count property and update or adds if not exists
//     //     // react creates new virtual DOM tree, and compare old virtual DOM, then it only changes element(s) that have changed

//     // }

     
//     render(){
//         // difference between state and props is state are local objects and its data only access curent component localy, while props are attributes or data passed component when invoking and it onl read to change something you must initailize state of component
//         return(
//             <div>
               
//                 {/* components to receive and render other components or elements. Instead of passing data or primitive values, children props enable developers to pass entire components or JSX elements as arguments  */}
//             {this.props.children} {/* its called like this what inside opened and closed tags of components when invoked or called in another components */}
//             <h1> counter #{this.props.counter.id}</h1>  {/*if you want access only id use id attribute same as <Counter ><h1>Counter # {counter.id}</h1></Counter>*/}
//             {/* Adding attribute source value dynamically */}
//             {/* <img src={this.state.ImageUrl} alt="" /> */}

//             {/* applaying class attribute (className) */}
//             {/* applying style object to style attribute using jsx expressions */}
//             {/* <span style={this.style } className="badge badge-primary">{this.counterDisplay()}</span> */}

//             {/* OR apply inline style */}
//             {/* <span style={{fontSize: 30, color: 'blueviolet'} } className="badge badge-primary">{this.counterDisplay()}</span> */}

//             {/* rendering classes dynamically */}
//             {/* <span className={this.getBadgetClass()}>{this.counterDisplay()}</span>
//             <button className="btn btn-secondary btn-sm">INCREMENT</button> */}

//             {/* <ul> */}
//                {/* {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}*/}  {/* each item should have uniqeu id to react know which item deleted or updated */}
//             {/* </ul> */}

//             {/* CONDITIONAL RENDERING */}
//             {/*{this.state.tags.length === 0 && <p>Please create tage</p>}*/} {/* if first statement will display second statement else nothing, if you add third statement, and privous two statements are two third will display and so on */}
//             {/*{this.state.count === 0 ?  <p>no value</p> : this.state.count}*/} {/* its like if and else. if statement is true display what after ? else what after :*/}
//             {/* {this.renderTags()} */}

//             <span className={this.getBadgetClass()}>{this.counterDisplay()}</span>
//             {/*<button onClick={this.handlerIncrement} className="btn btn-secondary btn-sm">INCREMENT</button>*/} {/* we dont call the mothed just we pass as property, when we use even handlers */}
//             {/*<button onClick={this.handlerIncrement.bind(this)} className="btn btn-secondary btn-sm">INCREMENT</button>*/} {/* by using the bind method, such as onClick={this.handlerIncrement.bind(this)} */}
//             {/*<button onClick={ = () => this.handlerIncrement()} className="btn btn-secondary btn-sm">INCREMENT</button>*/} {/* either by using an arrow function, such as onClick={() => this.handlerIncrement()} */}
//             {/*<button onClick={ () => this.handlerIncrement(1)} className="btn btn-secondary btn-sm">INCREMENT</button>*/}  {/* we call the method with  event argument u can pass another refernce dynamically*/}
//             {/* To call(invoke)  and pass argument an even handler method we must put inside arrow function  */}
//             <button onClick={this.handlerIncrement} className="btn btn-secondary btn-sm">INCREMENT</button> {/* we dont call the mothed just we pass as property, when we use even handlers, reference 'this' using arrow function */}
//             <button className="btn btn-danger btn-sm m-2" onClick={ () => this.props.onDelete(this.props.counter.id)}>Delete</button> {/* raising and even hadling: when we want change something to another component's state we must ask state owner(component), and that is raissing even (send event), so event implimintation is done inside state owner */}
//             </div>

//         );
    
//     }
//     counterDisplay() {
//         // return this.state.count == 0 ?  "zero" : this.state.count 
//         // easy way peek or extract count from this state
//         // and store constant count variable
//         const {value} = this.state;
//         return value === 0 ?  "zero" : value;

//     };

//     // rendering classes dynamically
//     getBadgetClass(){
//         let classes = "badge m-2 text-bg-"; // stored main classes, that not changed with conditions
//         classes += (this.state.value === 0) ? "warning" : "primary"; // changed class with condition
//         return classes;
//     };
// }   



// export default Counter;

// CONTROLLED COMPONENT BY PARENT 
class Counter extends Component{
    // state={
    //     value : this.props.counter.value
    // };

    // controlled component does not have local state it gets data from parent using props and requist updates raising events

    render(){
        return(
            <div>
               <h1>counter # {this.props.counter.id}</h1> 
                <span className={this.getBadgetClass()}>{this.counterDisplay()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button> {/* we dont call the mothed just we pass as property, when we use even handlers, reference 'this' using arrow function */}
                <button onClick={ () => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm">-</button> {/* we dont call the mothed just we pass as property, when we use even handlers, reference 'this' using arrow function */}
                <button className="btn btn-danger btn-sm m-2" onClick={ () => this.props.onDelete(this.props.counter.id)}>Delete</button> {/* raising and even hadling: when we want change something to another component's state we must ask state owner(component), and that is raissing even (send event), so event implimintation is done inside state owner */}
            </div>
        );
    };

    // handlerIncrement = () =>{
    //     this.setState({value: this.state.value + 1});
    // does not need methods that changes semothing  or manipulates to states bc there is no state here. it raise events to done manipulate
    // };
    
 
    counterDisplay() {
        // return this.state.count == 0 ?  "zero" : this.state.count 
        // easy way peek or extract count from this state
        // and store constant count variable
        // const {value} = this.state;
        const {value} = this.props.counter;
        return value === 0 ?  "zero" : value;
        
    };
        
    // rendering  css classes dynamically
    getBadgetClass(){
        let classes = "badge m-2 text-bg-"; // stored main classes, that not changed with conditions
        //classes += (this.state.value === 0) ? "warning" : "primary"; // changed class with condition
        classes += (this.props.counter.value === 0) ? "warning" : "primary"; 
        return classes;
    };
}

export default Counter;