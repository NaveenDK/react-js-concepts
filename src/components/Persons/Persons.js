import React ,{PureComponent }from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{ 
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor',props);

    }

    componentWillMount(){
        console.log('Persons.js Inside componentWillMount()');
    }
  
    componentDidMount()
    {
        console.log('Personsjs Inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps)
    {
        console.log('[UPDATE persons.js] inside componentwillReceiveProps ',nextProps)
    }
     
    shouldComponentUpdate(nextProps,nextState){
        console.log('UPDATE persons.js inside shouldcomponent ',nextProps,nextState)
        //return false;
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log('Update person.js inside componentwillupdate',nextProps,nextState);
    }

    componentDidUpdate (){
        console.log('Update Person.js inside componentDidupdate ');
    }


render (){
    console.log('Personsjs inside render()');
 return this.props.persons.map((person, index) => {
        return  <Person
            click ={()=>this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed ={(event)=> this.props.changed(event,person.id)}
            />
      }
);
    }}
export default Persons;