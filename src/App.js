import React, { Component } from 'react';
import classes from './App.css';

import Person from './Person/Person';
import person from './Person/Person';

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
                      let btnClass='';
                          
                      if (this.state.showPersons){
                        persons=(
                          <div>
                            {this.state.persons.map((person, index) => {
                              return <Person
                                  click ={()=>this.deletePersonHandler(index)}
                                  name={person.name}
                                  age={person.age}
                                  key={person.id}
                                  changed ={(event)=> this.nameChangedHandler(event,person.id)}
                                  />
                            })}
                          </div> 

                        )
                      
                         btnClass=classes.Red;
                      }

                     // let classes = ['red','bold'].join(' ');
                      let assignedClasses=[]; // we use classes.join(' ') in the clssname as now it needs to be a string 

                      if(this.state.persons.length <=2){
                         assignedClasses.push(classes.red);
                      }  
                      if (this.state.persons.length <=1){
                        assignedClasses.push(classes.bold);
                      }


                          return (
                            
                            <div className={classes.App}>
                            <h1>Hi, I'm a react App</h1>
                            <p className={assignedClasses.join(' ')}> I see me there!</p>
                                  {/* <button onClick={this.switchNameHandler.bind(this,'Maxmillian')}> Switch Name</button>*/  }
                                  { /*the below method is a bit inefficient and above bind method is recommended */}
                                    <button 
                                    className={btnClass}
                                    
                                    onClick={this.togglePersonsHandler}> Switch Name</button>
                                    {persons}
                          </div>
                            
                              );
                 }
}

export default  App;
