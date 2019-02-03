import React, { Component } from 'react';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state ={
    persons:[
      {id: '123', name: 'Max', age: 28},
      {id: '124', name:'Manu', age:29},
      {id: '125', name:'Stephanie', age:26}

    ],
    showPersons :false

  }
 deletePersonHandler = (personIndex) =>{
 //EVEN THOUGH below line does the job - in JS objects, arrays are reference type therefore after
 //this line 'persons' can be mutated so its better to use the line which is 'const persons = this.state.persons.splice();//
 //const persons = this.state.persons;
 //we cann use spice but in ES6 we are better of using this 3 dots - spread operator
 const persons = [...this.state.persons];
 persons.splice(personIndex,1);
 this.setState({persons:persons})

 }


nameChangedHandler = (event,id )=>{
  
        const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
        });
      
        const person = {
          ...this.state.persons [personIndex]
        };
        //alternative
        // const person = Object.assign({}, this.stae.persons[personIndex]);
        
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
          persons:persons
        });

}//end of namechangedhandler

            togglePersonsHandler = ()=>{
            const doesShow = this.state.showPersons;
            this.setState({showPersons: !doesShow});
            }

          render() {
  

                      let persons= null;
                      const btnClass='';
                          
                      if (this.state.showPersons){
                        persons=(
                          
                            <Persons 
                            persons={this.state.persons}
                            clicked={this.deletePersonHandler}
                            changed={this.nameChangedHandler}                       
                            />                     
                          

                        )
                      
                      }

                     // let classes = ['red','bold'].join(' ');
                   


                          return (
                            
                            <div className={classes.App}>
                            <Cockpit showPersons = {this.state.showPersons} 
                            persons ={this.state.persons}
                            clicked={this.togglePersonsHandler}
                            apptitle={this.props.title}
                            
                            />
                                    {persons}
                          </div>
                            
                              );
                 }
}

export default  App;
