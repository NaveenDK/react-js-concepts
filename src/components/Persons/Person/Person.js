import React,{Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
 
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
        if(this.props.position === 0){
            this.inputElement.focus();
        }
      
    }





    render(){
        console.log()
       return(

           <Aux >
               <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>

                   <p>{this.props.children}</p>
                   <input 
                   ref={(inp)=>{this.inputElement = inp}}
                   type="text" 
                   onChange={this.props.changed} 
                   value={this.props.name}/>
        </Aux>) 
   //     ) 
       //  return[
          //  <p key="1"onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
          //  <p key="2">{this.props.children}</p>,
           // <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
      //  ]



    }
}


Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string ,
    age: PropTypes.number,
    changed: PropTypes.func
   };

export default withClass(Person,classes.Person);

/*const person=(props) =>{
   
    return (
    <div className={classes.Person} >
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>

    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>

    </div>)
};
*/