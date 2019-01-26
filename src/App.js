import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 

  render() {
    return (
      <div className="App">
      <h1>Hi, I'm a react App</h1>
      <p> I see me there!</p>
      <Person name="Max" age="2"/>
      <Person name="Manu" age ="29"> My Hobbies: Racing</Person>
      <Person name="Stephanie" age="26"/>
      </div>

        );
  }
}

export default App;
