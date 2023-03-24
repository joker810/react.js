import React, { Component } from 'react';

class Counter extends Component {
    // state={
    //     value:this.props.counters.value,
    //     // tag:["tag1","tag2","tag3"],
    // };
    // styles={
    //     fontsize:10,
    //     fontweight:"bold",

    // };

    // renderTags(){
    //     if(this.state.tag.length === 0) return <p> no elements here</p>;

    //     return <ul>{this.state.tag.map(ta=> <li key={ta}>{ta} </li>)}</ul>  
    // }

    //or bind using constructor
    // constructor(){
    //     super();
    //     this.handleIncrement=this.handleIncrement.bind(this)
    // }

    // handleIncrement =()=>{
    //     this.setState({value:this.state.value+1});
    // }

    render() { 
        return (
            <div>
                {/* {this.props.children} */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={()=> this.props.onIncrement(this.props.counter)}
                className='btn btn-secondary btn-sm'>Increment</button>
                {/* <ul>
                    {this.state.tag.map(ta=> <li key={ta}>{ta} </li>)}
                </ul> */}

                {/* {
                    this.state.tag.length === 0 && "please create new tag"
                }
                {this.renderTags()} */}
                <button 
                onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-sm btn-danger m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value}=this.props.counter;
        return value===0 ? 'zero': value;
    }
}


 
export default Counter;