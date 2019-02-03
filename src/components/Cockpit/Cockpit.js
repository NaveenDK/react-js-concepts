import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses=[]; // we use classes.join(' ') in the clssname as now it needs to be a string 
  
   let btnClass='';

    if(props.showPersons){
        btnClass = classes.Red;
    }
    if(props.persons.length <=2){
       assignedClasses.push(classes.red);
    }  
    if (props.persons.length <=1){
      assignedClasses.push(classes.bold);
    }
    return (
              <div>
                     <h1>Hi, I'm a react App</h1>
                        <p className={classes.Cockpit}> I see me there!</p>
                                  {/* <button onClick={this.switchNameHandler.bind(this,'Maxmillian')}> Switch Name</button>*/  }
                                  { /*the below method is a bit inefficient and above bind method is recommended */}
                         <button  className={btnClass}
                        onClick={props.clicked}> Switch Name</button>
              </div>

    );
}

export default cockpit;