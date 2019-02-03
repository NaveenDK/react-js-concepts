import React,{Component} from 'react';

import classes from './Person.css';
 
class Person extends Component {
  
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor',props);

    }

    componentWillMount(){
        console.log('Person.js Inside componentWillMount()');
    }
  
    componentDidMount()
    {
        console.log('Personjs Inside componentDidMount()');
    }





    render(){
        console.log()
        return(

            <div className={classes.Person}>
                 <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>

                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name}/>


            </div>
        )
    }
}



export default Person;

/*const person=(props) =>{
   
    return (
    <div className={classes.Person} >
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>

    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>

    </div>)
};
*/