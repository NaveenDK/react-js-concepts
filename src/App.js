import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    persons:[
      {name: 'Max', age: 28},
      {name:'Manu', age:29},
      {name:'Stephanie', age:26}

    ]

  }
 
  switchNameHandler = (newName) =>{
 // console.log('Was clicked')
//DONOT MUTATE CHANGE STATE DIRECTLY-not recognized this.state.persons[0].name = 'Maximillian';
   this.setState({
    persons:[
      {name: newName, age: 28},
      {name:'Manu', age:29},
      {name:'Stephanie', age:289}

    ]
   })
  }

  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a react App</h1>
      <p> I see me there!</p>
    {/* <button onClick={this.switchNameHandler.bind(this,'Maxmillian')}> Switch Name</button>*/  }
     { /*the below method is a bit inefficient and above bind method is recommended */}
      <button onClick={()=>this.switchNameHandler('Maxmillian!!')}> Switch Name</button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}/>
      <Person 
      name={this.state.persons[1].name} 
      age ={this.state.persons[1].age}
      click={this.switchNameHandler.bind(this,'Max!')}
       >My Hobbies: Racing</Person>

      <Person
       name={this.state.persons[2].name}
        age={this.state.persons[2].age}/>
      </div>

        );
  }
}

export default App;
